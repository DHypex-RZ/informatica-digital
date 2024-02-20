<?php

use App\Http\Controllers\AutenticarController;
use App\Http\Controllers\TiendaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Apartado de la tienda
Route::get("/", [TiendaController::class, "mostrarInicio"])->name("inicio");
Route::get("/iniciar-sesion", [TiendaController::class, "mostrarInicioSesion"])->name("iniciar.sesion");
Route::get("/registrar", [TiendaController::class, "mostrarRegistro"])->name("registrar");
Route::get("/carrito", [TiendaController::class, "mostrarCarrito"])->name("carrito");
Route::get("/perfil", [TiendaController::class, "mostrarPerfil"])->name("perfil");

// Autenticación
Route::post("/registrar/nuevo-usuario", [AutenticarController::class, "registrarUsuario"])->name("registrar.usuario");
Route::post("/iniciar-sesion/auntenticando", [AutenticarController::class, "autenticarUsuario"])->name("autenticar");
Route::post("/cerrar-sesion", [AutenticarController::class, "cerrarSesionUsuario"])->name("cerrar.sesion");

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
*/
