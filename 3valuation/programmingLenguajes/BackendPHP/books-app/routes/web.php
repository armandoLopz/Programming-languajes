<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route; 

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/books', BookController::class );
Route::post('/api/books', [BookController::class, 'store'] )->name('book.store');
Route::delete('/api/books', BookController::class );
Route::patch('/api/books', BookController::class );