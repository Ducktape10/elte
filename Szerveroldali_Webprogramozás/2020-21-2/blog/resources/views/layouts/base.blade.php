<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>
        @if (View::hasSection('title'))
            @yield('title')
        @else
            Blog
        @endif
    </title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>

<body>
    <header class="mb-3">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">
                <img src="images/bootstrap.svg" width="30" height="30" class="d-inline-block align-top" alt="Logo">
                Blog
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Nyitólap</a>
                    </li>
                </ul>
            </div>

            @if (Auth::check())
                Regisztrálás

                {{Auth::user()->name}}
                {{-- {{Auth::user()['name']}} --}}

            @endif

            {{-- <form method="POST" action="{{ route('logout') }}">
            @csrf
                <button type="submit">Kijelentkezés</button>
            </form> --}}

            <a href="{{route('logout-user')}}">Kijelentkezés</a>


        </nav>
    </header>

    <div class="container">
      @yield('main-content')
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
