<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Category;

class CategoriesTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        // tábla resetelés
        DB::table('categories')->truncate();

        // létrehoz 5 kategóriát és elmenti
        Category::factory(5)->create();
    }
}
