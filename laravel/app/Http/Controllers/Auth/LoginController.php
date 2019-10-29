<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Psy\Util\Json;

class LoginController extends Controller {

    use AuthenticatesUsers;

    public function login(Request $request) {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // 認証に成功した
            $token = Str::random(80);
            $request->user()->forceFill([
                'api_token' => $token,
            ])->save();
            $user = Auth::user();
            return response()->json($user);
        }
        return 'hoge';
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->update(['api_token' => null]);

        $data['status'] = 'success';

        return response()->json($data);
    }
}
