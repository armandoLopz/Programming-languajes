<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Book;
class BookController
{

    public function __invoke(){
    
    }

    public function index(){
        
        $books = Book::all();

        return response()->json($books,200);
    }

    public function store(Request $request){

        $book = Book::create([
            "title"=> $request->title,
            "author"=> $request->author,
            "bornDay"=> $request->bornDay,
            "deathDate"=> $request->deathDate,
            "genre"=> $request->genre,
            "languajes"=> $request->languajes,
            "downloads"=> $request->downloads

        ]);
        
        return response()->json($book,200); 
    }

    public function destroy($id){
        
        $books = Book::find($id);

        if (!$books) {
            
            $message = [

                "message"=> "Libro no encontrado",
                'status'=> 404
            ];

            return response()->json($message,404);
        }
        
        $books->delete();
        
        return response()->json($books,200);
    }

    public function update(Request $request, $id){
        
        try{
            
            $books = Book::find($id);
    
            if (!$books) {
                
                $message = [
    
                    "message"=> "Libro no encontrado",
                    'status'=> 404
                ];
    
                return response()->json($message,404);
            }
            
            $books->title = $request->title;
            $books->author = $request->author;
            $books->bornDay = $request->bornDay;
            $books->deathDate = $request->deathDate;
            $books->genre = $request->genre;
            $books->downloads = $request->downloads;
            
            $books->save();
            
            return response()->json($books,200);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(),500);
        }
    }

    public function hola() {
        
        return "hola";
    }
}
