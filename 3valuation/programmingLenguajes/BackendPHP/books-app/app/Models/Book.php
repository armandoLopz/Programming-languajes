<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class book extends Model
{

    protected $table = 'books';

    protected $fillable = [
        'title',
        'author',
        'bornDay',
        'deathDate',
        'genre',
        'downloads',
    ];

    protected $primaryKey = 'id';
    public $incrementing = true;

}