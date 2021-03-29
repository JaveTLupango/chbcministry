<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Systeminfo;
use App\Models\SystemServices;

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
        $core = systemservices::ALL()->WHERE('title','CORE');
        return  $core;
    }
}
