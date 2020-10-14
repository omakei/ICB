<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Expenditure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ExpenditureController extends Controller
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
        return Inertia::render('Expenditure/Create', ['project'=> $project]);
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
            'payment_voucher' => ['required'],
            'payee' => ['required'],
            'particular' => ['required'],
            'project_id' => ['required', 'exists:projects,id']
        ]);

        $expenditure = Expenditure::create([
            'amount' => $request['amount'],
            'date_paid' => date('Y-m-d H:i:s',strtotime($request['date_paid'])),
            'payment_voucher' => $request['payment_voucher'],
            'payee' => $request['payee'],
            'particular' => $request['particular'],
            'project_id' => $request['project_id']
        ]);

        return Redirect::route('projects.show',['project' => $request['project_id']])->with('success', 'Expenditure Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\Response
     */
    public function show(Expenditure $expenditure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\Response
     */
    public function edit(Expenditure $expenditure)
    {
        return Inertia::render('Expenditure/Edit', ['expenditure'=> $expenditure]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expenditure $expenditure)
    {
        $request->validate([
            'amount' => ['required'],
            'date_paid' => ['required'],
            'payment_voucher' => ['required'],
            'payee' => ['required'],
            'particular' => ['required'],
            'project_id' => ['required', 'exists:projects,id']
        ]);

        $expenditure->update([
            'amount' => $request['amount'],
            'date_paid' => date('Y-m-d H:i:s',strtotime($request['date_paid'])),
            'payment_voucher' => $request['payment_voucher'],
            'payee' => $request['payee'],
            'particular' => $request['particular'],
            'project_id' => $request['project_id']
        ]);

        return Redirect::route('projects.show',['project' =>$request['project_id']])->with('success', 'Expenditure Created');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expenditure  $expenditure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expenditure $expenditure)
    {
        $expenditure->delete();

        return Redirect::back()->with('success', 'Expenditure deleted!');
    }
}
