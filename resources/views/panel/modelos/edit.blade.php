@extends('layouts.admin')

@section('content')
    <div class="relative overflow-x-auto">
        <div class="max-w-7xl mx-auto">
            @can(PermissionKey::Admin['permissions']['update']['name'])
                <form action="{{ route('panel.modelos.update', ['id'=>$modelo->id]) }}"
                    enctype="multipart/form-data" method="POST">
                    @csrf
                    @method('PUT')

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
                            Actualizar
                        </button>
                    </div>

                    <div class="mb-6">
                        <label for="modelo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span> Modelo</label>
                        <small class="pb-2 block">Recomendación... <img
                                src="{{ asset('img/panel/clear-format.png') }}"
                                alt="Clear format"></small>
                        <input type="text" id="modelo" name="modelo" required autocomplete="off"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="{{ $modelo->modelo }}">
                    </div>
                    <div class="mb-6">
                        <label for="precio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span> Precio del Modelo</label>
                        <small class="pb-2 block">Recomendación... <img
                            src="{{ asset('img/panel/clear-format.png') }}"
                            alt="Clear format"></small>
                        <input type="number" id="precio" name="precio" required autocomplete="off"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={{ $modelo->precio}}>
                    </div>
                    <div class="mb-6">
                        <label for="descripcion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger"></span> Descripción</label>
                        <small class="pb-2 block">Recomendación... <img
                            src="{{ asset('img/panel/clear-format.png') }}"
                            alt="Clear format"></small>
                        <input type="text" id="descripcion" name="descripcion" autocomplete="off"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={{$modelo->descripcion}}>
                    </div>                    
                    <div class="mb-6">
                        <label for="contenido"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span>
                            Contenido</label>
                        <small class="pb-2 block">Recomendación... <img
                            src="{{ asset('img/panel/clear-format.png') }}"
                            alt="Clear format"></small>
                        <textarea type="text" id="contenido" name="contenido" required
                            autocomplete="off"
                            cols="30" rows="10"
                            class="trumbowyg-panel bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {{$modelo->contenido}}
                        </textarea>
                    </div>


                    {{-- IMAGEN Y COLOR. Cómo se maneja esto? --}}
                    <div class="mb-6">
                        <label for="imagen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <span class="text-danger">*</span> Imagen del modelo
                        </label>
                        <small class="pb-2 block">Recomendación... <img
                            src="{{ asset('img/panel/clear-format.png') }}"
                            alt="Clear format"></small>
                        <input type="file" id="imagen" name="imagen" required value={{$modelo->imagen}}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-6">
                        <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <span class="text-danger">*</span> Color en HEXADECIMAL?
                        </label>
                        <small class="pb-2 block">Recomendación... <img
                            src="{{ asset('img/panel/clear-format.png') }}"
                            alt="Clear format"></small>
                        <input type="color" id="color" name="color" required
                            autocomplete="off"
                            value={{$modelo->color}}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    {{-- IMAGEN Y COLOR. Cómo se maneja esto? --}}


                    <div class="mb-6">
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><span
                                class="text-danger">*</span> Status del modelo</label>
                        <select name="status" id="status" required
                            value={{$modelo->status}}    
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="1" {{$modelo->status==1?"selected":""}}>Activo</option>
                                <option value="0" {{$modelo->status==0?"selected":""}}>Desactivo</option>
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
                            Actualizar
                        </button>
                    </div>
                </form>
            @endcan
        </div>
    </div>
@endsection
