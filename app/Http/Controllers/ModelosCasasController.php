<?php

namespace App\Http\Controllers;

use App\Models\ModeloCasas;
use Illuminate\Http\Request;

class ModelosCasasController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$modelos = ModeloCasas::all();
		return view('panel.modelos.index', compact('modelos'));
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return view('panel.modelos.create');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$validated = $request->validate([
			'modelo' => 'required|unique:modelo_casas,modelo',
			"descripcion" => "string",
			"precio" => "required|integer",
			"contenido"=> "required|string",
			"imagen"=> "required|string",
			"color"=> "required|string",
			"status"=> "required|boolean",
			
		]);

		ModeloCasas::create($validated);

		return redirect()->route('panel.modelos.index');
	}


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Int $id)
	{
		$modelo = ModeloCasas::find($id);
		return view('panel.modelos.edit', compact('modelo'));
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request)
	{
		$modelo = ModeloCasas::find($request->id);

		$modelo->modelo = $request->modelo;
		$modelo->precio = $request->precio;
		$modelo->descripcion = $request->descripcion;
		$modelo->contenido = $request->contenido;
		$modelo->imagen = $request->imagen;
		$modelo->color = $request->color;
		$modelo->status = $request->status;

		$modelo->save();

		return redirect()->route('panel.modelos.index');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Int $id)
	{
		ModeloCasas::destroy($id);

		return redirect()->route('panel.modelos.index');
	}
}
