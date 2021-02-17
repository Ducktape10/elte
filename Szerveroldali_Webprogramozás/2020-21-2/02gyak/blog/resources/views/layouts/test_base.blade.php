<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- CSRF -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Ha a view, ami extendeli a layoutot, rendelkezik saját title-el, akkor azt jelenítsük meg -->
    <title>
        @if (View::hasSection('title'))
            @yield('title')
        @else
            Laravel Alkalmazás
        @endif
    </title>

    <!-- Stílus -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <!-- Az "al view-okat" ide töltjük be, a yield a main-content nevű section-öket keresi -->
    <main>
        @yield('main-content')
    </main>

    <!-- Szkript -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>