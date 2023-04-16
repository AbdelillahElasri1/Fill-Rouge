<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\RealstateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});
// Route::apiResource('realstate', RealstateController::class);
Route::controller(RealstateController::class)->group(function(){
    Route::post('add', 'store');
    Route::get('all', 'index');
    Route::put('edit/{id}', 'update');
    Route::delete('delete/{id}', 'destroy');
    Route::get('getRealstate/{id}','show');
    route::get('search/{titre}', 'search');
});