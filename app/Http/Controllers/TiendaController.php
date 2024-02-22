<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class TiendaController extends Controller
{
    public function mostrarInicio($logout = false): InertiaResponse
    {
        $productos = DB::table("productos")->get();

        return Inertia::render("Inicio", [
            "productos" => $productos,
        ]);
    }

    public function mostrarInicioSesion(): InertiaResponse
    {
        return Inertia::render("Login");
    }

    public function mostrarRegistro(): InertiaResponse
    {
        return Inertia::render("Registro");
    }

    public function mostrarPerfil(): InertiaResponse
    {
        $usuario = DB::table("users as u")
            ->select(["d.dni", "d.fecha", "d.pais", "d.provincia", "d.poblacion", "d.cp", "u.name as nombre", "u.email"])
            ->join("datos_cliente as d", function ($join) {
                $join->on("d.usuario", "=", "u.id")
                    ->where("u.id", "=", Auth::user()->getAuthIdentifier());
            })->first();

        $pedidos = DB::table("pedidos")
            ->where("dni", "=", $usuario->dni)
            ->get();

        return Inertia::render("Perfil", [
            "usuario" => $usuario,
            "pedidos" => $pedidos
        ]);
    }
}
