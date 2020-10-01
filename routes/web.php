<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\EducationCertificateController;
use App\Http\Controllers\BoardRegistrationController;
use App\Http\Controllers\UserDetailsController;
use Dotenv\Store\File\Reader;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/home/dashboard', [DashboardController::class,'index']);
    Route::resource('organizations', OrganizationController::class);
    Route::resource('departments', DepartmentController::class);
    Route::resource('userdetails', UserDetailsController::class);
    Route::resource('educationcertificates', EducationCertificateController::class);
    Route::resource('boardregistrations', BoardRegistrationController::class);


    Route::get('sections/{department}/create', [DepartmentController::class,'create_section'])->name('sections.create');
    Route::post('sections/store', [DepartmentController::class,'store_section'])->name('sections.store');
    Route::get('sections/{department}/Edit{section}', [DepartmentController::class,'edit_section'])->name('sections.edit');
    Route::put('sections/{department}/Update', [DepartmentController::class,'update_section'])->name('sections.update');
    Route::get('sections/{section}', [DepartmentController::class,'show_section'])->name('sections.show');
    Route::delete('sections/{department}/destroy', [DepartmentController::class,'destroy_section'])->name('sections.destroy');
    
    Route::get('units/{department}/create', [DepartmentController::class,'create_unit'])->name('units.create');
    Route::post('units/store', [DepartmentController::class,'store_unit'])->name('units.store');
    Route::get('units/{section}/Edit/{unit}', [DepartmentController::class,'edit_unit'])->name('units.edit');
    Route::put('units/{department}/Update', [DepartmentController::class,'update_unit'])->name('units.update');
    Route::delete('units/{department}/destroy', [DepartmentController::class,'destroy_unit'])->name('units.destroy');
});



Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');
