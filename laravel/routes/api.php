<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::options('{all}', function () {
    $response = Response::make('');
    return $response;
});

Route::group(["middleware" => "cors"], function () {
    Route::group(["middleware" => "api"], function () {
    // 認証が必要ないメソッド
        Route::match(["post", "options"], '/login', 'Auth\LoginController@login');
    });
    Route::group(['middleware' => ['auth:api','cors']], function () {
        // 認証が必要なメソッド
        Route::match(["get", "options"], '/hero', 'Api\HeroController@index');
        Route::match(["post", "options"], '/logout', 'Auth\LoginController@logout');
        Route::match(["get", "options"], '/hero/{id}', 'Api\HeroController@show');
        Route::match(["post", "options"], '/hero/new', 'Api\HeroController@store');
    });
});
