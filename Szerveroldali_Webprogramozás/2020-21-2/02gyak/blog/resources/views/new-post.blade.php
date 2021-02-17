@extends('layouts.base')

@section('title', 'Blog - új poszt')

@section('main-content')
      <div class="container">
        <h1>Új bejegyzés</h1>
        <p class="mb-1">Ezen az oldalon tudsz új bejegyzést létrehozni.</p>
        <div class="mb-4">
            <a href="index.html"><i class="fas fa-long-arrow-alt-left"></i> Vissza a bejegyzésekhez</a>
        </div>

        <form>
            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Cím*</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="title" name="title" placeholder="Bejegyzés címe">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Szöveg*</label>
                <div class="col-sm-10">
                    <textarea rows="5" class="form-control" name="text" placeholder="Bejegyzés szövege"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Kategória</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="1" id="category1" name="categories[]">
                        <label for="category1" class="form-check-label">
                            <span class="badge badge-primary">Primary</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="2" id="category2" name="categories[]">
                        <label for="category2" class="form-check-label">
                            <span class="badge badge-secondary">Secondary</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="3" id="category3" name="categories[]">
                        <label for="category3" class="form-check-label">
                            <span class="badge badge-success">Success</span>
                        </label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="4" id="category4" name="categories[]">
                        <label for="category4" class="form-check-label">
                            <span class="badge badge-danger">Danger</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Beállítások</label>
                <div class="col-sm-10">
                    <div class="form-group">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" value="1" id="disable-comments"
                                name="disable-comments">
                            <label for="disable-comments" class="form-check-label">Hozzászólások tiltása</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" value="1" id="hide-post" name="hide-post">
                            <label for="hide-post" class="form-check-label">Bejegyzés elrejtése</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="attachment" class="col-sm-2 col-form-label">Csatolmány</label>
                <div class="col-sm-10">
                    <div class="form-group">
                        <input type="file" class="form-control-file" id="attachment" name="attachment">
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Létrehoz</button>
            </div>
        </form>
    </div>
@endsection
