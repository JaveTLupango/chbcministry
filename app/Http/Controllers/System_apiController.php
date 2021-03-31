<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Systeminfo;
use App\Models\SystemServices;
use Illuminate\Support\Facades\Auth;

class System_apiController extends Controller
{
    //
    public function getSystemName()
    {
        $system_info = systeminfo::All();
        return $system_info;
    }

    public function getSystemServices()
    {
        $service = systemservices::ALL()->WHERE('title','Services');
        return $service;
    }

    public function getSystemCore()
    {
        $core = systemservices::WHERE('title','core')->get();
        return  $core;
    }

    public function userLogout()
    {
        Auth::logout();

        //$request->session()->invalidate();
    
        //$request->session()->regenerateToken();
    
        return redirect('/');
    }
}
