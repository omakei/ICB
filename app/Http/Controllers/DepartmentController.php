<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Department;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Department/Index', ['departments'=> Department::where('type', 'department')->get()->map(function($department){
            $data['id'] = $department->id;
            $data['name'] = $department->name;
            $data['is_academic'] = $department->is_academic;
            $data['organization'] = $department->organization->name;
            return $data;
        })]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Department/Create');
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
            'name' => ['required', 'string'],
            'is_academic' => ['required', 'boolean']
        ]);

        $department = Department::create([
            'name' => $request['name'],
            'is_academic' =>$request['is_academic'],
            'organization_id' => Organization::first()->id,
            'type' => 'department'
        ]);

        return Redirect::route('departments')->with(['success'  => 'Department Created Successful']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        return Inertia::render('Section/Index',[
            'department' => $department,
            'sections' => $department->sections()->map(function($section){
                $data['id'] = $section->id;
                $data['name'] = $section->name;
                $data['organization'] = $section->organization->name;

                return $data;
            })
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        return Inertia::render('Department/Edit', ['department'=>$department]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'is_academic' => ['required', 'boolean']
        ]);

        $department->update([
            'name' => $request['name'],
            'is_academic' =>$request['is_academic'],
            'organization_id' => Organization::first()->id,
            'type' => 'department'
        ]);

        return Redirect::route('departments')->with(['success'  => 'Department Updated Successful']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        $department->delete();

        return Redirect::route('sections')->with(['success'  => 'Department Deleted Successful']);
    }

    public function create_section(Department $department)
    {
        return Inertia::render('Section/Create', ['parent'=>$department]);
    }

    public function store_section(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'parent_id' => ['required', 'exists:departments,id']
        ]);

        $department = Department::create([
            'name' => $request['name'],
            'is_academic' =>1,
            'parent_id' =>$request['parent_id'],
            'organization_id' => Organization::first()->id,
            'type' => 'section'
        ]);

        return Redirect::route('departments/'. $request['parent_id'])->with(['success'  => 'Department Section Created Successful']);
    }

    
    public function edit_section(Department $department, Department $section)
    {
        return Inertia::render('Section/Edit', ['parent'=>$department, 'section' => $section]);
    }

    public function update_section(Request $request, Department $department)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'parent_id' => ['required', 'exists:departments,id']
        ]);

        $department->update([
            'name' => $request['name'],
            'is_academic' =>1,
            'parent_id' =>$request['parent_id'],
            'organization_id' => Organization::first()->id,
            'type' => 'section'
        ]);

        return Redirect::back()->with(['success'  => 'Department Section Updated Successful']);
    }

    public function destroy_section(Department $department)
    {
        $department->delete();

        return Redirect::back()->with(['success'  => 'Department Section Deleted Successful']);
    }

    public function show_section(Department $section)
    {
        return Inertia::render('Unit/Index',[
            'section' => $section,
            'units' => $section->units()->map(function($unit){
                $data['id'] = $unit->id;
                $data['name'] = $unit->name;
                $data['organization'] = $unit->organization->name;

                return $data;
            })
        ]);
    }

    public function create_unit(Department $department)
    {
        return Inertia::render('Unit/Create', ['parent'=>$department]);
    }

    public function store_unit(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'parent_id' => ['required', 'exists:departments,id']
        ]);

        $department = Department::create([
            'name' => $request['name'],
            'is_academic' =>1,
            'parent_id' =>$request['parent_id'],
            'organization_id' => Organization::first()->id,
            'type' => 'unity'
        ]);

        return Redirect::route('sections.show',['department' => $request['parent_id']])->with(['success'  => 'Section Unit Created Successful']);
    }

    public function edit_unit(Department $section , Department $unit)
    {
        return Inertia::render('Unit/Edit', ['parent'=>$section, 'unit' => $unit]);
    }

    public function update_unit(Request $request, Department $department)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'parent_id' => ['required', 'exists:departments,id']
        ]);

        $department->update([
            'name' => $request['name'],
            'is_academic' =>1,
            'parent_id' =>$request['parent_id'],
            'organization_id' => Organization::first()->id,
            'type' => 'unity'
        ]);

        return Redirect::back()->with(['success'  => 'Section Unit Updated Successful']);
    }


    public function destroy_unit(Department $department)
    {
        $department->delete();

        return Redirect::back()->with(['success'  => 'Department Unit Deleted Successful']);
    }
}
