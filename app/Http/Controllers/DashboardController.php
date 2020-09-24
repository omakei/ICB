<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
   
    public function index()
    {
       

            if (Organization::count() > 0) {

                return Inertia::render('Install');
            }
            
            return Inertia::render('Layout');
       
    }
}