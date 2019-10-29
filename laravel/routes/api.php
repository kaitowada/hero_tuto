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
Route::group(["middleware" => "api"], function () {
// 認証が必要ないメソッド
    Route::post('/login', 'Auth\LoginController@login');
    Route::group(['middleware' => 'auth:api'], function () {
        // 認証が必要なメソッド
        Route::post('/logout', 'Auth\LoginController@logout');
        Route::get('/hero', 'Api\HeroController@index');
        Route::get('/hero/{id}', 'Api\HeroController@show');
        Route::post('/hero/new', 'Api\HeroController@store');
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });
});
