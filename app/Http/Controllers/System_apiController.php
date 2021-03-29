<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Systeminfo;

class System_apiController extends Controller
{
    //
    public function getSystemName()
    {
        $system_info = systeminfo::All();
        return $system_info;
    }
}
