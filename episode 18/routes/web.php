<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return array(
        'Laravel',
        'Vue',
        'PHP',
        'Javascript',
        'Tooling'
    );
});
