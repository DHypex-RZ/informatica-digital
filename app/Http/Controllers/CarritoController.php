<?php

namespace App\Http\Controllers;

use App\Mail\PedidosMailer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
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

        $productoEnCarrito = DB::table("lineas_carrito")->where("producto", "=", $producto->id)->first();

        if ($productoEnCarrito == null) {
            DB::table("lineas_carrito")
                ->insert([
                    "carrito" => $carrito->id,
                    "producto" => $producto->id,
                    "cantidad" => $request->input("cantidad"),
                    "importe" => $importeTotal
                ]);
        } else {
            DB::table("lineas_carrito")
                ->where("producto", "=", $producto->id)
                ->update([
                    "cantidad" => $productoEnCarrito->cantidad + $request->input("cantidad"),
                    "importe" => $productoEnCarrito->importe + $importeTotal
                ]);
        }


        session(["carrito" => $carrito->id]);

        return to_route("inicio");
    }

    public function realizarCompra(Request $request): RedirectResponse
    {
        $productos = DB::table("lineas_carrito as l")
            ->select(["l.cantidad", "l.importe", "p.id", "p.nombre"])
            ->join("carritos as c", function ($join) {
                $join->on("c.id", "=", "l.carrito")
                    ->where("c.id", "=", session("carrito"));
            })->join("productos as p", "p.id", "=", "l.producto")
            ->get();

        $importeTotal = 0;

        $cliente = DB::table("datos_cliente as d")
            ->join("users as u", function ($join) {
                $join->on("d.usuario", "=", "u.id")
                    ->where("u.id", "=", Auth::user()->getAuthIdentifier());
            })->first();

        $pedido = DB::table("pedidos")
            ->insertGetId([
                "carrito" => session("carrito"),
                "dni" => $cliente->dni,
            ]);

        foreach ($productos as $producto) {
            DB::table("lineas_pedido")
                ->insert([
                    "pedido" => $pedido,
                    "producto" => $producto->id,
                    "cantidad" => $producto->cantidad,
                    "importe" => $producto->importe
                ]);

            $importeTotal += $producto->importe;
        }

        DB::table("pedidos")
            ->where("id", "=", $pedido)
            ->update([
                "fecha" => date("d/m/Y"),
                "importe_total" => $importeTotal
            ]);

        DB::table("lineas_carrito")
            ->where("carrito", "=", session("carrito"))
            ->delete();

        $pedido = DB::table("pedidos")->where("id", "=", $pedido)->first();

        Mail::to($cliente->email)->send(new PedidosMailer($pedido));

        return to_route("perfil");
    }

    private function crearCarritoSinCliente(): object
    {
        $idCarrito = DB::table("carritos")->insertGetId(["dni" => null]);
        return DB::table("carritos")->select(["id"])->where("id", "=", $idCarrito)->first();
    }
}
