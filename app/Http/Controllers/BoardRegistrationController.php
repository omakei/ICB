<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\BoardRegistration;
use Illuminate\Support\Facades\Redirect;

class BoardRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('BoardRegistration/Index', ['boards' => BoardRegistration::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('BoardRegistration/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        BoardRegistration::create($request->validate([
            'board_name' => ['required'],
            'description' => ['required']
            ])); 
    
            return Redirect::route('boardregistrations.index')->with(['success' => 'Board Registration Created Successful']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BoardRegistration  $boardRegistration
     * @return \Illuminate\Http\Response
     */
    public function show(BoardRegistration $boardregistration)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BoardRegistration  $boardRegistration
     * @return \Illuminate\Http\Response
     */
    public function edit(BoardRegistration $boardregistration)
    {
        return Inertia::render('BoardRegistration/Edit', ['board' => $boardregistration]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BoardRegistration  $boardRegistration
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BoardRegistration $boardregistration)
    {
        $boardregistration->update($request->validate([
            'board_name' => ['required'],
            'description' => ['required']
            ])); 
    
            return Redirect::route('boardregistrations.index')->with(['success' => 'Board Registration Update Successful']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BoardRegistration  $boardRegistration
     * @return \Illuminate\Http\Response
     */
    public function destroy(BoardRegistration $boardregistration)
    {
        $boardregistration->delete(); 
    
        return Redirect::route('boardregistrations.index')->with(['success' => 'Board Registration Deleted Successful']);
    }
}
