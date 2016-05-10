<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
    //return Response::json(array('success' => true));
});

Route::group(array('prefix' => 'api'), function() {
	Route::post('auth/login', 'AuthController@login');
	Route::get('auth/logout', 'AuthController@logout');
});

Route::resource('snippets', 'SnippetController');
Route::get('snippet-category/{id}', 'SnippetController@category');


// Route::get('snippets', 'SnippetController@index');
// Route::post('snippets', 'SnippetController@store');
// Route::get('snippets/{id}', 'SnippetController@show');
// Route::put('snippets/{id}', 'SnippetController@update');








/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');
});
