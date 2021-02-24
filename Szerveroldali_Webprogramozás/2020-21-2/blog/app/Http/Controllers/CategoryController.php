<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller {

    public function newCategoryIndex() {
        return view('new-category');
    }

    public function createNewCategory(Request $request) {
        // name - kötelező, legalább 2, lefeljebb 20 hosszú
        // style - kötelező, értéknek benne kell lennie ebben: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

    $data = $request->validate([
      'name' => ['required', 'min:2', 'max:20'],
      'style' => ['required', 'in:primary,secondary,success,danger,warning,info,light,dark']
    //   'style' => ['required', Rule::in(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])]
    ]);
    }
}
