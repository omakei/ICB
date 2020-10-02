<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use App\Actions\Fortify\PasswordValidationRules;
use Illuminate\Support\Facades\Validator;
class ActivationController extends Controller
{
    use PasswordValidationRules;

    public function index()
    {
        return view('auth.activate-account');
    }

    public function activate(Request $request)
    {
        $request->validate([
            'activation_code' => ['required']
        ]);
        

        $user = User::where('activation_code', $request['activation_code'])->where('has_reset_password',0)->first();

       

        if (empty($user)) {
            
            return Redirect::back()->with(['status' => 'The Activation Code is Incorrect']);
        }

        Session::put('user_for_update_password', $user);

        return Redirect::route('update_password.form');
    }

    public function update_password_form()
    {
        return view('auth.update-account-password');
    }

    public function update_password(Request $request)
    { 
        
        $data['password'] = $request['password'];
        $data['password_confirmation'] = $request['password_confirmation'];
        $user = Session::pull('user_for_update_password');
        
        Validator::make($data, [
            'password' => $this->passwordRules(),
        ]);

        $user->password = Hash::make($data['password']);
        $user->has_reset_password = 1;
        $user->save();

        Session::remove('user_for_update_password');

        return Redirect::route('login')->with(['status' => 'Password Updated Successfull']);
    }
}
