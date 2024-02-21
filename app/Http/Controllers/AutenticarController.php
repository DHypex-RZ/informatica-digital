<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AutenticarController extends Controller
{
    public function autenticarUsuario(Request $request): RedirectResponse
    {
        $rules = [
            "email" => "required|email",
            "password" => "required",
        ];

        $validator = Validator::make($request->input(), $rules);
        if ($validator->fails()) {
            return to_route("iniciar.sesion");
        }

        if (!Auth::attempt($request->only("email", "password"))) {
            return to_route("iniciar.sesion");
        }

        $carrito = DB::table("carritos as c")
            ->select(["c.id"])
            ->join("datos_cliente as d", function ($join) {
                $join->on("d.dni", "=", "c.dni")
                    ->where("d.usuario", "=", Auth::user()->getAuthIdentifier());
            })->first();

        session(["carrito" => $carrito->id]);

        return to_route("inicio");
    }

    public function registrarUsuario(Request $request): RedirectResponse
    {
        $rules = [
            "nombre" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed",
            "fecha" => "required|date",
            "dni" => "required",
            "pais" => "required",
            "provincia" => "required",
            "poblacion" => "required",
            "cp" => "required"
        ];

        $validator = Validator::make($request->input(), $rules);
        if ($validator->fails()) {
            return to_route("registrar");
        }

        User::create([
            "name" => $request->input("nombre"),
            "email" => $request->input("email"),
            "password" => Hash::make($request->input("password"))
        ]);


        Auth::attempt(["name" => $request->input("nombre"), "password" => $request->input("password")]);

        DB::table("datos_cliente")->insert([
            "usuario" => Auth::user()->getAuthIdentifier(),
            "dni" => $request->input("dni"),
            "fecha" => $request->input("fecha"),
            "pais" => $request->input("pais"),
            "provincia" => $request->input("provincia"),
            "poblacion" => $request->input("poblacion"),
            "cp" => $request->input("cp")
        ]);

        $idCarrito = DB::table("carritos")->insertGetId([
            "dni" => $request->input("dni")
        ]);

        session(["carrito" => $idCarrito]);

        return to_route("inicio");
    }

    public function cerrarSesionUsuario(Request $request): RedirectResponse
    {
        Auth::logout();
        session(["carrito" => null]);
        return to_route("inicio");
    }
}
