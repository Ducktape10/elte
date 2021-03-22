<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    use HasFactory;

    public function categories() {
        return $this->belongsToMany(Category::class)->withTimestamps();
    }

    public function author() {
        return $this->belongsTo(User::class, 'foreign_key');
    }

    // $post->categories()->attach($request->categories);

}
