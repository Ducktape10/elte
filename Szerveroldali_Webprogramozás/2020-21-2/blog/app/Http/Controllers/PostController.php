<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller {
  public function newPostIndex() {
    return view('new-post');
  }

  public function createNewPost(Request $request) {

    // title - kötelező, legalább 2, legfeljebb 48 hosszú
    // text - kötelező, legfeljebb 2000 hosszú
    // disable-comments - csak logikai lehet, elhagyható
    // hide-post - csak logikai lehet, elhagyható


    // szabályírási lehetőségek:
    // 'name' => 'rule1|rule2|rule3'
    // 'name' => ['rule1', 'rule2', 'rule3']

    $data = $request->validate([
      'title' => 'required|min:2|max:48',
      'text' => 'required|max:2000',
      'disable-comments' => 'boolean|nullable',
      'hide-post' => 'boolean|nullable'
    ]);

    echo(json_encode($data));
  }
}
