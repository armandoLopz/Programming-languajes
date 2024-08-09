<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
<<<<<<< HEAD
});

Route::get('/api/books', [BookController::class, 'index']);

Route::post('/api/books', [BookController::class, 'store']);

Route::delete('/api/books/{id}', [BookController::class, 'destroy'] );

Route::put('/api/books/{id}', [BookController::class, 'update']);


=======
});
>>>>>>> parent of 80aa7300 (Integrate frontend with backend)
