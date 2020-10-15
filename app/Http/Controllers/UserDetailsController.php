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
use App\Models\Role;
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
            $data['title'] = $user->title;
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
        return Inertia::render('User/Create',[ 
            'boards'=> $boards, 
            'certificates' => $certificates, 
            'departments'=> Department::where('type', 'department')->get(), 
            'titles' => get_title_dropdown()
             ]);
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
            'title' => ['required'],
            'roles*value' => ['required', 'exists:roles,id'],
            'board_registrations*value' => ['required', 'exists:board_registrations,id'],
            'education_certificaties*value' => ['required', 'exists:education_certificaties,id'],
            'image' => ['required'],

        ]);

        $userdetails = UserDetails::create([
            'first_name' => $request['first_name'],
            'middle_name' => $request['middle_name'],
            'last_name' => $request['last_name'],
            'title' => $request['title'],
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

        foreach ($request['roles'] as $role) {
            
            $userdetails->roles()->attach($role['value']);
        }

        if(!is_null($request['image'])){
            
            list($type, $request['image']) = explode(';', $request['image']);
            list(, $request['image']) = explode(',', $request['image']);
            list(,$type) = explode(':', $type);
            list(, $extension) = explode('/', $type);

            $userdetails->addMediaFromBase64($request['image'])->usingFileName(rand(100,999).$userdetails->first_name."." .$extension)->toMediaCollection('profile-images');
        }
        $user = User::where('user_id', $userdetails->id)->first();

        $user->update([
            'name' => $userdetails->first_name. " ".$userdetails->middle_name. " ".$userdetails->last_name,
            'email' => $request['email']
        ]);

        return Redirect::route('userdetails.index')->with('success', 'User Created Successful');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function show(UserDetails $userdetail)
    {
        return Inertia::render('User/Show', [
            'userdetail' => $userdetail,
            'projects' => $userdetail->projects()->with('client')->get(),
            'image' => $userdetail->getMedia('profile-images')[0]->getFullUrl(),
            'department' => $userdetail->department,
            'account' => $userdetail->account
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(UserDetails $userdetail)
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
        // dd($userdetail->account->roles);

        return Inertia::render('User/Edit',[ 
            'userdetail' => $userdetail,
            'board_registration'=> $userdetail->board_registrations->map(function($board){$data['value'] = $board->id; $data['label']= $board->board_name; return $data;})??$userdetail->board_registrations,
            'education_certificates' => $userdetail->education_certificates->map(function($certificate){$data['value'] = $certificate->id; $data['label']= $certificate->certificate_name; return $data;})??$userdetail->education_certificates,
            'user_roles' => $userdetail->account->roles->map(function($role){$data['value'] = $role->id; $data['label']= $role->name; return $data;})??null,
            'roles' => Role::where('name','!=', 'superuser')->get()->map(function($role){$data['value'] = $role->id; $data['label']= $role->name; return $data;}),
            'email' => $userdetail->account->email,
            'boards'=> $boards, 
            'certificates' => $certificates, 
            'departments'=> Department::where('type', 'department')->get(), 
            'titles' => get_title_dropdown() 
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserDetails  $userDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserDetails $userdetail)
    {
        $request->validate([
            'first_name' => ['required'],
            'middle_name' => ['required'],
            'last_name' => ['required'],
            'mobile_number' => ['required'],
            'department' => ['required', 'exists:departments,id'],
            'email' => ['required'],
            'title' => ['required'],
            'board_registrations*value' => ['required', 'exists:board_registrations,id'],
            'roles*value' => ['required', 'exists:roles,id'],
            'education_certificaties*value' => ['required', 'exists:education_certificaties,id'],
            'image' => ['sometimes'],

        ]);

        $userdetail->update([
            'first_name' => $request['first_name'],
            'middle_name' => $request['middle_name'],
            'last_name' => $request['last_name'],
            'title' => $request['title'],
            'mobile_number' => $request['mobile_number'],
            'department_id' => $request['department'],
            'organization_id' => 1
        ]);

        foreach ($request['board_registrations'] as $board) {
            
            $userdetail->board_registrations()->sync($board['value']);
        }

        foreach ($request['education_certificaties'] as $certificate) {
            
            $userdetail->education_certificates()->sync($certificate['value']);
        }
        
        foreach ($request['roles'] as $role) {
            
            $userdetail->roles()->sync($role['value']);
        }

        if(!is_null($request['image'])){
            
            list($type, $request['image']) = explode(';', $request['image']);
            list(, $request['image']) = explode(',', $request['image']);
            list(,$type) = explode(':', $type);
            list(, $extension) = explode('/', $type);

            $userdetail->addMediaFromBase64($request['image'])->usingFileName(rand(100,999).$userdetail->first_name."." .$extension)->toMediaCollection('profile-images');
        }
        
        $user = User::create([
            'name' => $userdetail->first_name. " ".$userdetail->middle_name. " ".$userdetail->last_name,
            'email' => $request['email'],
            'password' => Hash::make('password#12'),
            'activation_code' => rand(100, 999)."-ICB-". rand(100, 999)."-IMS"
        ]);

        return Redirect::route('userdetails.index')->with('success', 'User Created Successful');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Userdetails  $userdetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserDetails $userdetail)
    {
        
    }
}
