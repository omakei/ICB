<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Client;
use App\Models\ClientPayment;
use App\Models\Project;
use App\Models\Department;
use App\Models\Expenditure;
use App\Models\Organization;
use App\Models\UserDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Project/Index', ['projects'=>Project::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $userdetails = UserDetails::all()->map(function($user) {
            $data['value'] = $user->id;
            $data['label'] = $user->first_name. " ". $user->middle_name. " ". $user->last_name." (". $user->department->name.")";

            return $data;
        });

        $departments = Department::where('type', 'department')->get()->map(function($department){
            $data['value'] = $department->id;
            $data['label'] = $department->name;

            return $data;
        });

        return Inertia::render('Project/Create', ['clients' => Client::all(), 'users'=> $userdetails, 'departments' => $departments]);
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
            'description' => ['required'],
            'contract_sum_vat_exclusive' => ['required'],
            'contract_sum_vat_inclusive' => ['required'],
            'client_id' => ['required', 'exists:clients,id'],
            'department_id*value' => ['required', 'exists:departments,id'],
            'userdetail_id*value' => ['required', 'exists:user_details,id'],
            'start_date' => ['required', ],
            'end_date' => ['required', ],
        ]);

        // dd(str_replace('T',' ',$request['start_date']));

        // dd(date('Y-m-d H:i:s',strtotime($request['start_date'])));

        $project = Project::create([
            'name' => $request['name'],
            'description' => $request['description'],
            'contract_sum_vat_exclusive' => $request['contract_sum_vat_exclusive'],
            'contract_sum_vat_inclusive' => $request['contract_sum_vat_inclusive'],
            'start_date' => date('Y-m-d H:i:s',strtotime($request['start_date'])),
            'end_date' => date('Y-m-d H:i:s',strtotime($request['end_date'])),
            'client_id' => $request['client_id'],
            'remarks' => 'ongoing'
        ]);

        foreach ($request['department_id'] as $department) {
            
            $project->departments()->attach($department['value']);
        }

        foreach ($request['userdetail_id'] as $consaltant) {
            
            $project->user_details()->attach($consaltant['value']);
        }
        
        return Redirect::route('projects.index')->with('success', 'Project created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {

        return Inertia::render('Project/Show',
        [
            'project' => $project, 
            'expenditures' => $project->expenditures,
            'client_payments' => $project->client_payments,
            'organization'=> Organization::first(),
            'client' => $project->client,
            'project_summary' => $this->project_summary($project)
            
        ]);
    }

    private function project_summary(Project $project)
    {
        $data[0]['description']= "Contract Sum Inclusive VAT";
        $data[1]['description']= "Contract Sum Exclusive VAT";
        $data[2]['description']= "Gross Income";
        $data[3]['description']= "Gross Income To Institute (13%)";
        $data[4]['description']= "Gross Income To ICB (9%)";
        $data[5]['description']= "Machine Charges (1%)";
        $data[6]['description']= "Net Income";
        $data[7]['description']= "Direct Cost";
        $data[8]['description']= "Total Proffessional Fee (100%) \n (Net Income - Direct Cost)";
        $data[9]['description']= "Resource Team Fee \n (90% of total Proffessional Fee)";
        $data[10]['description']= "Resource Team VAT (5%)";
        $data[11]['description']= "Net Proffessional Income \n (Resource Team VAT - Resource Team Fee)";
        $data[12]['description']= "Department Income (10%)";

        $gross_income_to_institute = $project->contract_sum_vat_exclusive * 0.13;
        $gross_income_to_icb = $project->contract_sum_vat_exclusive * 0.09;
        $machine_charges = $project->contract_sum_vat_exclusive * 0.01;

        $net_income = $project->contract_sum_vat_exclusive - ($gross_income_to_institute + $gross_income_to_icb + $machine_charges);

        $direct_cost = $project->expenditures->sum('amount');

        $proffesional_fee = $net_income - $direct_cost;

        $resource_team_fee = $proffesional_fee * 0.90;

        $data[0]['amount']= $project->contract_sum_vat_inclusive;
        $data[1]['amount']= $project->contract_sum_vat_exclusive;
        $data[2]['amount']= $project->contract_sum_vat_exclusive;
        $data[3]['amount']= $gross_income_to_institute;
        $data[4]['amount']= $gross_income_to_icb;
        $data[5]['amount']= $machine_charges;
        $data[6]['amount']= $net_income;
        $data[7]['amount']= $direct_cost;
        $data[8]['amount']= $proffesional_fee;
        $data[9]['amount']= $resource_team_fee;
        $data[10]['amount']= $resource_team_fee + ($resource_team_fee * 0.05);
        $data[11]['amount']= $resource_team_fee;
        $data[12]['amount']= $project->contract_sum_vat_exclusive * 0.10;

        return collect($data);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        $userdetails = UserDetails::all()->map(function($user) {
            $data['value'] = $user->id;
            $data['label'] = $user->first_name. " ". $user->middle_name. " ". $user->last_name." (". $user->department->name.")";

            return $data;
        });

        $departments = Department::where('type', 'department')->get()->map(function($department){
            $data['value'] = $department->id;
            $data['label'] = $department->name;

            return $data;
        });

        return Inertia::render('Project/Edit',['project' => $project,'clients' => Client::all(), 'users'=> $userdetails, 'departments' => $departments]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => ['required', 'String'],
            'description' => ['required'],
            'contract_sum_vat_exclusive' => ['required'],
            'contract_sum_vat_inclusive' => ['required'],
            'client_id' => ['required', 'exists:clients,id'],
            'department_id*value' => ['required', 'exists:departments,id'],
            'userdetail_id*value' => ['required', 'exists:user_details,id'],
            'start_date' => ['required', ],
            'end_date' => ['required', ],
        ]);

        $project->update([
            'name' => $request['name'],
            'description' => $request['description'],
            'contract_sum_vat_exclusive' => $request['contract_sum_vat_exclusive'],
            'contract_sum_vat_inclusive' => $request['contract_sum_vat_inclusive'],
            'start_date' => date('Y-m-d H:i:s',strtotime($request['start_date'])),
            'end_date' => date('Y-m-d H:i:s',strtotime($request['end_date'])),
            'client_id' => $request['client_id'],
            'remarks' => 'ongoing'
        ]);

        foreach ($request['department_id'] as $department) {
            
            $project->departments()->sync($department['value']);
        }

        foreach ($request['userdetail_id'] as $consaltant) {
            
            $project->user_details()->sync($consaltant['value']);
        }
        
        return Redirect::route('projects.index')->with('success', 'Project created.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->delete(); 
    
        return Redirect::route('projects.index')->with(['success' => 'Project Deleted Successful']);
    }
}
