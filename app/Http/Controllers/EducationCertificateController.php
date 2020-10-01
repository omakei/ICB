<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\EducationCertificate;

class EducationCertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('EducationCertificate/Index', ['certificates' => EducationCertificate::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('EducationCertificate/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       EducationCertificate::create($request->validate([
        'name' => ['required'],
        'description' => ['required']
        ])); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EducationCertificate  $educationCertificate
     * @return \Illuminate\Http\Response
     */
    public function show(EducationCertificate $educationCertificate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EducationCertificate  $educationCertificate
     * @return \Illuminate\Http\Response
     */
    public function edit(EducationCertificate $educationCertificate)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EducationCertificate  $educationCertificate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EducationCertificate $educationCertificate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EducationCertificate  $educationCertificate
     * @return \Illuminate\Http\Response
     */
    public function destroy(EducationCertificate $educationCertificate)
    {
        //
    }
}
