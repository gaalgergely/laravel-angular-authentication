<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\PasswordReset;
use App\User;
use Symfony\Component\HttpFoundation\Response;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request)
    {
        $passwordReset = PasswordReset::select('email')->whereToken($request['resetToken'])->first();
        User::whereEmail($passwordReset->email)->first()->update(['password' => $request['password']]);
        $passwordReset->delete();

        return response()->json(['data' => 'Your password is changed.'], Response::HTTP_CREATED);
    }
}
