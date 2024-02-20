<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CarritoController extends Controller
{
    function agregarProducto(Request $request)
    {
        $producto = DB::table("productos")
            ->where("id", "=", $request->input("producto"))
            ->first();

        $carrito = DB::table("carritos as c")
            ->select(["c.id"])
            ->join("datos_cliente as d", function ($join) {
                $join->on("d.dni", "=", "c.dni")
                    ->where("d.usuario", "=", Auth::user()->getAuthIdentifier());
            })->first();

        $importeTotal = $producto->precio * $request->input("cantidad");

        DB::table("lineas_carrito")
            ->insert([
                "carrito" => $carrito->id,
                "producto" => $producto->id,
                "cantidad" => $request->input("cantidad"),
                "importe" => $importeTotal
            ]);

        return to_route("inicio");
    }
}
