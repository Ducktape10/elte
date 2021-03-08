<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Post;

class HomeController extends Controller {

    public function index() {
        $user_count = User::count();

        $posts = Post::all();

        return view('home', [
            'user_count' => $user_count,
            'posts' => $posts
        ]);
    }
}
