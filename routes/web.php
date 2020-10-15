<?php

use Dotenv\Store\File\Reader;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ActivationController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\LoanRefundController;
use App\Http\Controllers\ExpenditureController;
use App\Http\Controllers\UserDetailsController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ClientPaymentController;
use App\Http\Controllers\BoardRegistrationController;
use App\Http\Controllers\EducationCertificateController;

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

Route::get('activate_account',[ActivationController::class, 'index'] )->name('activate_account');
Route::post('activate',[ActivationController::class, 'activate'] )->name('activate');
Route::get('update_password',[ActivationController::class, 'update_password_form'] )->name('update_password.form');
Route::post('update_password',[ActivationController::class, 'update_password'])->name('update_password.update');

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/home/dashboard', [DashboardController::class,'index']);
    Route::resource('organizations', OrganizationController::class);
    Route::resource('departments', DepartmentController::class);
    Route::resource('userdetails', UserDetailsController::class);
    Route::resource('educationcertificates', EducationCertificateController::class);
    Route::resource('boardregistrations', BoardRegistrationController::class);
    Route::resource('projects', ProjectController::class);
    Route::resource('clients', ClientController::class);


    Route::get('client_payments/{project}/create', [ClientPaymentController::class, 'create'])->name('client_payments.create');
    Route::post('client_payments/store', [ClientPaymentController::class, 'store'])->name('client_payments.store');
    Route::get('client_payments/{client_payment}/edit', [ClientPaymentController::class, 'edit'])->name('client_payments.edit');
    Route::put('client_payments/{client_payment}/update', [ClientPaymentController::class, 'update'])->name('client_payments.update');
    Route::delete('client_payments/{client_payment}/destroy', [ClientPaymentController::class, 'delete'])->name('client_payments.delete');

    Route::get('expenditures/{project}/create', [ExpenditureController::class, 'create'])->name('expenditures.create');
    Route::post('expenditures/store', [ExpenditureController::class, 'store'])->name('expenditures.store');
    Route::get('expenditures/{expenditure}/edit', [ExpenditureController::class, 'edit'])->name('expenditures.edit');
    Route::put('expenditures/{expenditure}/update', [ExpenditureController::class, 'update'])->name('expenditures.update');
    Route::delete('expenditures/{expenditure}/destroy', [ExpenditureController::class, 'delete'])->name('expenditures.delete');

    Route::get('loan_refunds/{loan}/create', [LoanRefundController::class, 'create'])->name('loan_refunds.create');
    Route::post('loan_refunds/store', [LoanRefundController::class, 'store'])->name('loan_refunds.store');
    Route::get('loan_refunds/{loan_refund}/edit', [LoanRefundController::class, 'edit'])->name('loan_refunds.edit');
    Route::put('loan_refunds/{loan_refund}/update', [LoanRefundController::class, 'update'])->name('loan_refunds.update');
    Route::delete('loan_refunds/{loan_refund}/destroy', [LoanRefundController::class, 'delete'])->name('loan_refunds.delete');

    Route::get('loans/{project}/create', [LoanController::class, 'create'])->name('loans.create');
    Route::get('loans', [LoanController::class, 'index'])->name('loans.index');
    Route::get('loans/{loan}', [LoanController::class, 'show'])->name('loans.show');
    Route::post('loans/store', [LoanController::class, 'store'])->name('loans.store');
    Route::get('loans/{loan}/edit', [LoanController::class, 'edit'])->name('loans.edit');
    Route::put('loans/{loan}/update', [LoanController::class, 'update'])->name('loans.update');
    Route::delete('loans/{loan}/destroy', [LoanController::class, 'delete'])->name('loans.delete');
    
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
