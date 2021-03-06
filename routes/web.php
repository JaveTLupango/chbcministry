<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!|
*/

Route::resource('/', 'App\Http\Controllers\SysteminfoController');
Route::get('api/getsystemname', 'App\Http\Controllers\System_apiController@getSystemName');
Route::get('api/getsystemservices', 'App\Http\Controllers\System_apiController@getSystemServices');
Route::get('api/getsystemcore', 'App\Http\Controllers\System_apiController@getSystemCore');
Route::get('api/getsystemfaq', 'App\Http\Controllers\System_apiController@getSystemFaq');
Route::get('logout', 'App\Http\Controllers\System_apiController@userLogout');

// Route::get('/', function () {
//     return view('home');
// });
// Route::get('/home', function () {
//     return view('home');
// });

Route::get('/blog', function () {
    return view('blog');
});
Route::get('/blogpost', function () {
    return view('post');
});

// Credentials list off routes
Route::get('/login', function () {
    return view('credential.login');
});

Route::get('/register', function () {
    return view('credential.register');
});
Route::get('/forgot-password', function () {
    return view('credential.forgot-password');
});
Route::get('/reset-password', function () {
    return view('credential.resetpassword');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
