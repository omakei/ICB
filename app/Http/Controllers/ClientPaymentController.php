<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ClientPayment;
use App\Models\Project;
use Illuminate\Support\Facades\Redirect;
class ClientPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Project $project)
    {
        return Inertia::render('ClientPayment/Create', ['project'=> $project]);
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
            'amount' => ['required'],
            'date_paid' => ['required'],
            'account_number' => ['required'],
            'receipt' => ['required'],
            'project_id' => ['required', 'exists:projects,id']
        ]);

        $client_payment = ClientPayment::create([
            'amount' => $request['amount'],
            'date_paid' => date('Y-m-d H:i:s',strtotime($request['date_paid'])),
            'account_number' => $request['account_number'],
            'receipt' => $request['receipt'],
            'project_id' => $request['project_id']
        ]);

        return Redirect::route('projects.show',['project' => $request['project_id']])->with('success', 'Client Payment Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ClientPayment  $clientPayment
     * @return \Illuminate\Http\Response
     */
    public function show(ClientPayment $clientPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ClientPayment  $clientPayment
     * @return \Illuminate\Http\Response
     */
    public function edit(ClientPayment $client_payment)
    {
        return Inertia::render('ClientPayment/Edit', ['project'=> $client_payment]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ClientPayment  $clientPayment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ClientPayment $client_payment)
    {
        $request->validate([
            'amount' => ['required'],
            'date_paid' => ['required'],
            'account_number' => ['required'],
            'receipt' => ['required'],
            'project_id' => ['required', 'exists:projects,id']
        ]);

        $client_payment->update([
            'amount' => $request['amount'],
            'date_paid' => date('Y-m-d H:i:s',strtotime($request['date_paid'])),
            'account_number' => $request['account_number'],
            'receipt' => $request['receipt'],
            'project_id' => $request['project_id']
        ]);

        return Redirect::route('projects.show',['project' => $request['project_id']])->with('success', 'Client Payment Update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ClientPayment  $clientPayment
     * @return \Illuminate\Http\Response
     */
    public function destroy(ClientPayment $client_payment)
    {
        $client_payment->delete();

        return Redirect::back()->with('success', 'Client Payment deleted!');
    }
}
