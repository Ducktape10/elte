<?php

use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;

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

Route::get('/new-post', [PostController::class, 'newPostIndex'])->name('new-post');
Route::post('/new-post', [PostController::class, 'createNewPost'])->name('create-new-post');

Route::get('/new-category', [CategoryController::class, 'newCategoryIndex'])->name('new-category');
Route::post('/new-category', [CategoryController::class, 'createNewCategory'])->name('create-new-category');

Route::get('/category', function () {
    return view('category');
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
