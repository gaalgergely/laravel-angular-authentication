<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use App\PasswordReset;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class ResetPasswordController extends Controller
{
    /**
     * @param ResetRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendEmail(ResetRequest $request)
    {
        $passwordReset = PasswordReset::firstOrCreate(['email' => $request['email']], ['token'=> Str::random(60)]);
        Mail::to($request['email'])->send(new ResetPasswordMail($passwordReset->token));
        return response()->json(['data' => 'Reset Email is sent successfully, please check your inbox.'], Response::HTTP_OK);
    }
}
