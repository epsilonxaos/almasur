<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelosCasas extends Model
{
	use HasFactory;

	protected $table = 'modelos_casas';
	protected $primaryKey = 'id';
	protected $fillable = ['nombre', 'descripcion', 'contenido', 'imagen', 'precio', 'color', 'status'];
}
