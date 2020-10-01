<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Organization/Index', ['organization' => Organization::first(), 'creatable'=> Organization::count()>0?false:true]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Organization/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'String'],
            'address' => ['required'],
            'contact' => ['required'],
            'email' => ['required'],
            'website' => ['required'],
            'fax' => ['required'],
            'image' => ['required']
        ]);

        // dd($request);

        $organization = Organization::create([
            'name' => $request['name'],
            'address' => $request['address'],
            'contact' => $request['contact'],
            'email' => $request['email'],
            'website' => $request['website'],
            'fax' => $request['fax'],
        ]);

        if(!is_null($request['image'])){

            $organization->addMediaFromBase64($request['image'])->toMediaCollection();
        }
        
        return Redirect::route('organizations')->with('success', 'Organization created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function show(Organization $organization)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function edit(Organization $organization)
    {
        return Inertia::render('Organization/Edit',['organization' => $organization]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Organization $organization)
    {
        $request->validate([
            'name' => ['required', 'String'],
            'address' => ['required'],
            'contact' => ['required'],
            'email' => ['required'],
            'website' => ['required'],
            'fax' => ['required'],
            'image' => ['required']
        ]);

        $organization->update([
            'name' => $request['name'],
            'address' => $request['address'],
            'contact' => $request['contact'],
            'email' => $request['email'],
            'website' => $request['website'],
            'fax' => $request['fax'],
        ]);

        if(!is_null($request['image'])){

            $organization->addMediaFromBase64($request['image'])->toMediaCollection();
        }
        
        return Redirect::route('organizations')->with('success', 'Organization Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organization $organization)
    {
        //
    }
}
