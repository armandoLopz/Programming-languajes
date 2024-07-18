<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
class BookController
{

    public function __invoke(){

        
        return DB::table('books')->get();
    }
    
}
