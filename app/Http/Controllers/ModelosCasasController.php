<?php

namespace App\Http\Controllers;

use App\Models\ModelosCasas;
use Illuminate\Http\Request;

class ModelosCasasController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$modelos = ModelosCasas::all();
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
			'nombre' => 'required|unique:modelos_casas,nombre',
			'descripcion' => 'required',
		]);

		ModelosCasas::create($validated);

		return redirect()->route('modelos.index');
	}


	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Int $id)
	{
		$modelo = ModelosCasas::find($id);
		return view('panel.modelos.edit', compact('modelo'));
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, ModelosCasas $modelosCasas)
	{
		$modelo = ModelosCasas::find($request->id);

		$modelo->nombre = $request->nombre;
		$modelo->descripcion = $request->descripcion;
		$modelo->save();

		return redirect()->route('modelos.index');
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Int $id)
	{
		ModelosCasas::destroy($id);

		return redirect()->route('modelos.index');
	}
}
