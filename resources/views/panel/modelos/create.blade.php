@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto">
        <div class="max-w-7xl mx-auto">
            @can(PermissionKey::Admin['permissions']['create']['name'])
                <form action="{{ route('panel.modelos.store') }}" method="POST">
                    @csrf
                    <div class="flex items-center justify-end pb-4 bg-white dark:bg-gray-900">
                        <button type="submit"
                            class="px-2 py-1 bg-blue-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                            <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M14 4l0 4l-6 0l0 -4"></path>
                            </svg>
                            Guardar
                        </button>
                    </div>

                    <div class="mb-6">
                        <label for="modelo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span> Modelo</label>
                        <input type="text" id="modelo" name="modelo" required autofocus autocomplete="modelo"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Modelo Capibara">
                    </div>
                    <div class="mb-6">
                        <label for="precio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span> Precio del Modelo</label>
                        <input type="number" id="precio" name="precio" required autocomplete="price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1800500">
                    </div>
                    <div class="mb-6">
                        <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger"></span> Descripción</label>
                        <input type="text" id="descripcion" name="descripcion" autocomplete="Descripcion"
                            placeholder="Descripción del modelo"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="contenido"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span>
                            Contenido</label>
                        <input type="text" id="contenido" name="contenido" required
                            autocomplete="Contenido"
                            placeholder="Contenido en Formato HTML"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>

                    {{-- IMAGEN Y COLOR. Cómo se maneja esto? --}}
                    <div class="mb-6">
                        <label for="imagen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <span class="text-danger">*</span> Imagen del modelo
                        </label>
                        <input type="file" id="imagen" name="imagen" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <span class="text-danger">*</span> Color en HEXADECIMAL?
                        </label>
                        <input type="color" id="color" name="color" required
                            autocomplete="color"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    {{-- IMAGEN Y COLOR. Cómo se maneja esto? --}}



                    <div class="mb-6">
                        <label for="contenido"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span>
                            Contenido</label>
                        <input type="text" id="contenido" name="contenido" required
                            autocomplete="Contenido"
                            placeholder="Contenido en Formato HTML"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span> Status del modelo</label>
                        <select name="status" id="status" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="1">Activo</option>
                            <option value="0">Desactivo</option>
                        </select>
                    </div>
                    <div class="text-center pt-8 mt-16">
                        <button type="submit"
                            class="px-2 py-1 mx-auto bg-blue-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-wide transition ease-in-out duration-150 flex items-center">
                            <svg class="w-5 inline-block mr-1" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"></path>
                                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                <path d="M14 4l0 4l-6 0l0 -4"></path>
                            </svg>
                            Guardar
                        </button>
                    </div>
                </form>
            @endcan
        </div>
    </div>
@endsection
