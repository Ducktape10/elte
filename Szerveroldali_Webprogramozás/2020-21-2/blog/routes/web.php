<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/test-bs', function () {
    return view('test');
});

Route::get('/new-post', function () {
    return view('new-post');
});
Route::get('/category', function () {
    return view('category');
});
Route::get('/new-category', function () {
    return view('new-category');
});
Route::get('/post', function () {
    return view('post');
});
Route::get('/profile-update', function () {
    return view('profile-update');
});
Route::get('/profile', function () {
    return view('profile');
});
Route::get('/rules', function () {
    return view('rules');
});