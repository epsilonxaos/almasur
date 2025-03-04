<?php

namespace Database\Seeders;

use App\Models\ModeloCasas;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CasasSeeder extends Seeder {
    public function run (): void {
        DB::table("modelo_casas")->truncate();
        
        ModeloCasas::create([
            "modelo" => "Ventura",
            "precio" => 1299000,
            "descripcion" => "Una casa donde la comodidad y la calidez se unen para crear un hogar ideal para ti y tu familia.",
            "contenido" => "3 recamaras, 2 baños, sala, comedor, cocina",
            "imagen" => "../../../img/modelos_casas/Modelo_Ventura.png",
            "color" => "ventura",
            "status" => 1
        ]);
        ModeloCasas::create([
            "modelo" => "Pacífico",
            "precio" => 1435000,
            "descripcion" => "Un refugio de paz y tranquilidad para ti y tus seres queridos.",
            "contenido" => "3 recamaras, 2 baños, sala, comedor, cocina",
            "imagen" => "../../../img/modelos_casas/Modelo_Pacifico.png",
            "color" => "pacifico",
            "status" => 1
        ]);
    }
}