<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AppController extends Controller
{
	public function enviarWebhook(Request $request)
	{
		$response = Http::post('https://hooks.zapier.com/hooks/catch/16601330/2gm3qcw/', $request->all());
		return $response->json();
	}
}
