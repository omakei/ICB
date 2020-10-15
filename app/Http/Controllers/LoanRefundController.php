<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use Inertia\Inertia;
use App\Models\LoanRefund;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class LoanRefundController extends Controller
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
    public function create(Loan $loan)
    {
        return Inertia::render('LoanRefund/Create', ['loan'=> $loan]);
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
            'returned_date' => ['required'],
            'description' => ['required'],
            'loan_id' => ['required', 'exists:loans,id']
        ]);

        $loan = LoanRefund::create([
            'amount' => $request['amount'],
            'returned_date' => date('Y-m-d H:i:s',strtotime($request['returned_date'])),
            'description' => $request['description'],
            'loan_id' => $request['loan_id']
        ]);

        return Redirect::route('laons.show',['loan'=>$request['loan_id']])->with('success', 'Loan Refund Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LoanRefund  $loanRefund
     * @return \Illuminate\Http\Response
     */
    public function show(LoanRefund $loanRefund)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LoanRefund  $loanRefund
     * @return \Illuminate\Http\Response
     */
    public function edit(LoanRefund $loan_refund)
    {
        return Inertia::render('LoanRefund/Edit', ['refund'=> $loan_refund]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LoanRefund  $loanRefund
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LoanRefund $loan_refund)
    {
        $request->validate([
            'amount' => ['required'],
            'returned_date' => ['required'],
            'description' => ['required'],
            'loan_id' => ['required', 'exists:loans,id']
        ]);

        $loan_refund->update([
            'amount' => $request['amount'],
            'returned_date' => date('Y-m-d H:i:s',strtotime($request['returned_date'])),
            'description' => $request['description'],
            'loan_id' => $request['loan_id']
        ]);

        return Redirect::route('laons.show',['loan'=> $request['loan_id']])->with('success', 'Loan Refund Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LoanRefund  $loanRefund
     * @return \Illuminate\Http\Response
     */
    public function destroy(LoanRefund $loan_refund)
    {
        $loan_refund->delete(); 
    
        return Redirect::back()->with(['success' => 'Loan Refund Deleted Successful']);
    }
}
