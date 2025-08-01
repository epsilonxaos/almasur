<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    
    @include('layouts.modules.metas')

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/react/index.jsx'])
</head>

<body class="antialiased bg-white">
    <div id="root" class=""></div>
</body>

</html>
