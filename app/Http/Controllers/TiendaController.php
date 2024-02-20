<?php

namespace App\Http\Controllers;

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

    public function mostrarCarrito(): InertiaResponse
    {
        return Inertia::render("Carrito");
    }

    public function mostrarPerfil(): InertiaResponse
    {
        return Inertia::render("Perfil");
    }
}
