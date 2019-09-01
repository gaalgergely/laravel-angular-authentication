<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetRequest;
use App\Mail\ResetPasswordMail;
use Symfony\Component\HttpFoundation\Response;

class ResetPasswordController extends Controller
{
    public function sendEmail(ResetRequest $request)
    {
        \Mail::to($request['email'])->send(new ResetPasswordMail);
        return response()->json(['data' => 'Reset Email is sent successfully, please check your inbox.'], Response::HTTP_OK);
    }
}
