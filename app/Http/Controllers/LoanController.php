<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Loan/Index', ['loans' => Loan::all()->map(function($loan){
            $data['id'] = $loan->id;
            $data['amount'] = $loan->amount;
            $data['description'] = $loan->description;
            $data['consaltants'] = $loan->project->user_details;
            $data['project'] = $loan->project->name;
            $data['issued_date'] = $loan->issued_date->diffForHumans();

            return $data;
        })]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Project $project)
    {
        return Inertia::render('Loan/Create', ['project'=> $project]);
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
            'issued_date' => ['required'],
            'description' => ['required'],
            'project_id' => ['required', 'exists:projects,id']
        ]);

        $loan = Loan::create([
            'amount' => $request['amount'],
            'issued_date' => date('Y-m-d H:i:s',strtotime($request['issued_date'])),
            'description' => $request['description'],
            'project_id' => $request['project_id']
        ]);

        return Redirect::route('projects.show',['project'=> $request['project_id']])->with('success', 'Loan Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function show(Loan $loan)
    {
        return Inertia::render('Loan/Show', ['loan'=> $loan, 'refunds' => $loan->loan_refunds]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function edit(Loan $loan)
    {
        return Inertia::render('Loan/Edit', ['loan'=> $loan]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Loan $loan)
    {
        $request->validate([
            'amount' => ['required'],
            'issued_date' => ['required'],
            'description' => ['required'],
            'project_id' => ['required', 'exists:projects,id']
        ]);

        $loan->update([
            'amount' => $request['amount'],
            'issued_date' => date('Y-m-d H:i:s',strtotime($request['issued_date'])),
            'description' => $request['description'],
            'project_id' => $request['project_id']
        ]);

        return Redirect::route('projects.show',['project'=> $request['project_id']])->with('success', 'Loan Update');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Loan  $loan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Loan $loan)
    {
        $loan->delete(); 
    
        return Redirect::back()->with(['success' => 'Loan Deleted Successful']);
    }
}
