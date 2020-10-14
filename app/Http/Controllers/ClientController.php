<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Client/Index', ['clients' => Client::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Client/Create');
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

        $client = Client::create([
            'name' => $request['name'],
            'address' => $request['address'],
            'contact' => $request['contact'],
            'email' => $request['email'],
            'website' => $request['website'],
            'fax' => $request['fax'],
        ]);

        if(!is_null($request['image'])){

            list($type, $request['image']) = explode(';', $request['image']);
            list(, $request['image']) = explode(',', $request['image']);
            list(,$type) = explode(':', $type);
            list(, $extension) = explode('/', $type);

            $client->addMediaFromBase64($request['image'])->usingFileName(rand(100,999).$client->name."." .$extension)->toMediaCollection();
        }
        
        return Redirect::route('clients.index')->with('success', 'Client created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        return Inertia::render('Client/Edit', ['client' => $client]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $client)
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

        $client->update([
            'name' => $request['name'],
            'address' => $request['address'],
            'contact' => $request['contact'],
            'email' => $request['email'],
            'website' => $request['website'],
            'fax' => $request['fax'],
        ]);

        if(!is_null($request['image'])){

            list($type, $request['image']) = explode(';', $request['image']);
            list(, $request['image']) = explode(',', $request['image']);
            list(,$type) = explode(':', $type);
            list(, $extension) = explode('/', $type);

            $client->addMediaFromBase64($request['image'])->usingFileName(rand(100,999).$client->name."." .$extension)->toMediaCollection();
        }
        
        return Redirect::route('organizations.index')->with('success', 'Client Updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        $client->delete(); 
    
        return Redirect::route('clients.index')->with(['success' => 'Client Deleted Successful']);
    }
}
