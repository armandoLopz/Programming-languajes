<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route; 

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/books', [BookController::class, 'index']);

Route::post('/api/books', [BookController::class, 'store']);

Route::delete('/api/books/{id}', [BookController::class, 'destroy'] );

Route::put('/api/books/{id}', [BookController::class, 'update']);


