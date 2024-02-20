<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        return to_route("inicio");
    }

    public function registrarUsuario(Request $request): RedirectResponse
    {
        $rules = [
            "nombre" => "required",
            "email" => "required|email|unique:users",
            "password" => "required",
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

        return to_route("inicio");
    }

    public function cerrarSesionUsuario(): RedirectResponse
    {
        Auth::logout();
        return to_route("inicio");
    }
}
