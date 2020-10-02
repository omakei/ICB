<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Department;
use App\Models\UserDetails;
use Illuminate\Http\Request;
use App\Models\BoardRegistration;
use App\Models\EducationCertificate;
use App\Models\Organization;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;

class UserDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('User/Index', ['user_details' => UserDetails::all()->map(function($user){
            $data['id']= $user->id;
            $data['first_name'] = $user->first_name;
            $data['middle_name'] = $user->middle_name;
            $data['last_name'] = $user->last_name;
            $data['mobile_number'] = $user->mobile_number;
            $data['department']= $user->department->name;
            $data['activation_code'] = $user->account->activation_code;

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
        $boards = BoardRegistration::all()->map(function($board){
            $data['value'] = $board->id;
            $data['label'] = $board->board_name;

            return $data;
        });

        $certificates = EducationCertificate::all()->map(function($certificate){
            $data['value'] = $certificate->id;
            $data['label'] = $certificate->certificate_name;

            return $data;
        });
        return Inertia::render('User/Create',[ 'boards'=> $boards, 'certificates' => $certificates, 'departments'=> Department::where('type', 'department')->get() ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { //dd($request);
        $request->validate([
            'first_name' => ['required'],
            'middle_name' => ['required'],
            'last_name' => ['required'],
            'mobile_number' => ['required'],
            'department' => ['required', 'exists:departments,id'],
            'email' => ['required'],
            'board_registrations*value' => ['required', 'exists:board_registrations,id'],
            'education_certificaties*value' => ['required', 'exists:education_certificaties,id'],
            'image' => ['required'],

        ]);

        $userdetails = UserDetails::create([
            'first_name' => $request['first_name'],
            'middle_name' => $request['middle_name'],
            'last_name' => $request['last_name'],
            'mobile_number' => $request['mobile_number'],
            'department_id' => $request['department'],
            'organization_id' => 1
        ]);

        foreach ($request['board_registrations'] as $board) {
            
            $userdetails->board_registrations()->attach($board['value']);
        }

        foreach ($request['education_certificaties'] as $certificate) {
            
            $userdetails->education_certificates()->attach($certificate['value']);
        }

        if(!is_null($request['image'])){
            
            list($type, $request['image']) = explode(';', $request['image']);
            list(, $request['image']) = explode(',', $request['image']);
            list(,$type) = explode(':', $type);
            list(, $extension) = explode('/', $type);

            $userdetails->addMediaFromBase64($request['image'])->usingFileName(rand(100,999).$userdetails->first_name."." .$extension)->toMediaCollection('profile-images');
        }
        
        $user = User::create([
            'name' => $userdetails->first_name. " ".$userdetails->middle_name. " ".$userdetails->last_name,
            'email' => $request['email'],
            'password' => Hash::make('password#12'),
            'activation_code' => rand(100, 999)."-ICB-". rand(100, 999)."-IMS"
        ]);

        return Redirect::route('userdetails.index')->with('success', 'User Created Successful');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function show(UserDetails $userDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(UserDetails $userDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserDetails $userDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserDetails $userDetails)
    {
        //
    }
}
