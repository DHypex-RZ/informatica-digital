<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class CarritoController extends Controller
{
    public function mostrarCarrito(): InertiaResponse
    {
        $carrito = session("carrito");

        $productos = DB::table("lineas_carrito as l")
            ->select(["l.cantidad", "l.importe", "p.nombre", "p.imagen"])
            ->join("carritos as c", function ($join) use ($carrito) {
                $join->on("c.id", "=", "l.carrito")
                    ->where("c.id", "=", $carrito);
            })
            ->join("productos as p", "p.id", "=", "l.producto")
            ->get();

        $importeTotal = 0;

        foreach ($productos as $producto) {
            $importeTotal += $producto->importe;
        }

        return Inertia::render("Carrito", [
            "productos" => $productos,
            "importeTotal" => $importeTotal
        ]);
    }

    function agregarProducto(Request $request): RedirectResponse
    {
        $producto = DB::table("productos")
            ->where("id", "=", $request->input("producto"))
            ->first();

        $importeTotal = $producto->precio * $request->input("cantidad");

        if (Auth::user() == null && session("carrito") == null) {
            $carrito = $this->crearCarritoSinCliente();
        } else if (Auth::user() != null) {
            $carrito = DB::table("carritos as c")
                ->select(["c.id"])
                ->join("datos_cliente as d", function ($join) {
                    $join->on("d.dni", "=", "c.dni")
                        ->where("d.usuario", "=", Auth::user()->getAuthIdentifier());
                })->first();
        } else {
            $idCarrito = session("carrito");
            $carrito = DB::table("carritos")->select(["id"])->where("id", "=", $idCarrito)->first();
        }

        DB::table("lineas_carrito")
            ->insert([
                "carrito" => $carrito->id,
                "producto" => $producto->id,
                "cantidad" => $request->input("cantidad"),
                "importe" => $importeTotal
            ]);

        session(["carrito" => $carrito->id]);

        return to_route("inicio");
    }

    private function crearCarritoSinCliente(): object
    {
        $idCarrito = DB::table("carritos")->insertGetId(["dni" => null]);
        return DB::table("carritos")->select(["id"])->where("id", "=", $idCarrito)->first();
    }
}
