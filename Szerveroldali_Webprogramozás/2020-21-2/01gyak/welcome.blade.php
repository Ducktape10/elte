{{--
    ez a file a
    `composer create-project --prefer-dist laravel/laravel PROJEKT_NÉV` parancs kiadása után létrejött projekt
    `resources/views/welcome.blade.php`-ja, pár Blade direktíva megmutatására átírva
--}}

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body>

    @php
        $name = 'Robin';
        $number = 42;
    @endphp

    @isset($name)
        <h1>Szia {{ $name }}!</h1>
    @else
        <img src="https://miro.medium.com/max/702/1*ib1x6mZK7cozNvwRF7vsFw.png">
    @endisset

    <hr>

    @if ($number === 42)
        <img src="https://i.kym-cdn.com/photos/images/newsfeed/001/236/841/075.jpg">
    @elseif ($number === 0)
        <img src="https://i.kym-cdn.com/entries/icons/facebook/000/028/021/work.jpg">
    @else
        <p>A $number elég unalmas</p>
    @endif


    {{-- @switch()
        @case()
            @break
        @case()
            @break
        @default
    @endswitch --}}

    @php
        $fruits = ['banán', 'körte', 'paradicsom', 'barack'];
        $empty_fruits = [];
    @endphp

    <hr>

    <ul>
        @foreach ($fruits as $fruit)
            <li>{{ $loop->iteration }}. {{ $fruit }}</li>
        @endforeach
    </ul>

    <hr>

    <ul>
        @for ($i = 0; $i < 10; $i++)
            <li>{{ $i }}</li>
        @endfor
    </ul>

    <hr>

    @empty ($empty_fruits)
        Az $empty_fruits üres!
    @else
        Az $empty_fruits nem üres!
    @endempty

    <hr>

    <ul>
        @forelse ($empty_fruits as $fruit)
            <li>{{ $loop->iteration }}. {{ $fruit }}</li>
        @empty
            <li>Az $empty_fruits üres!</li>
        @endforelse
    </ul>

    </body>
</html>
