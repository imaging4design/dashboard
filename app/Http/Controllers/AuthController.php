<?php

namespace Dashboard\Http\Controllers;

use Illuminate\Http\Request;
use Dashboard\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Dashboard\User;


class AuthController extends Controller {

	public function login(Request $request) {

		if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
			return response()->json(Auth::user());
		} else {
			return response()->json(array('flash' => 'Invalid username or password!'), 500);
		}
	}

	public function logout() {
		Auth::logout();
		return response()->json(array('flash' => 'Logged out!'));
	}

}