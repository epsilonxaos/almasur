<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('modelo_casas', function (Blueprint $table) {
            $table->id();
            $table->string('modelo');
            $table->integer('precio');
            $table->text('descripcion');
            $table->longText('espacios');
            $table->string('imagen');
            $table->string('color');

            $table->enum('estado', [1, 0])->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modelo_casas');
    }
};
