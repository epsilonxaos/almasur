<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModeloCasas extends Model
{
    use HasFactory;
    protected $table = 'modelo_casas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'modelo',
        'precio',
        'descripcion',
        'contenido',
        'imagen',
        'color',
        'status'
    ];

}
