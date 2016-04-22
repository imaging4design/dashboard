<?php

namespace Dashboard\Http\Controllers;

use Dashboard\Http\Response;
use Illuminate\Http\Request;
use Dashboard\Snippet;
use Dashboard\SnippetCat;



class SnippetController extends Controller
{
	
	/**
	 * Display a list of all snippets
	 * Display a list of all categories
	 *
	 * @return Response
	 */
	public function index()
	{
		$all_snippets = Snippet::orderBy('name', 'ASC')->get()->take(6);
		$all_snippetCats = SnippetCat::orderBy('id', 'ASC')->get();

		return response()->json(['snippets' => $all_snippets, 'categories' => $all_snippetCats]);
		//return response()->json(array('success' => true));
	}



	/**
	 * Display a list of snippets of a specific category
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function category($id)
	{
		$categories = SnippetCat::orderBy('id', 'ASC')->get();
		$snippets = Snippet::with('snippetCat')->where('snippet_cat_id', $id)->orderBy('id', 'ASC')->get();

		return response()->json(['snippets' => $snippets, 'categories' => $categories]);
	}



	/**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
	public function show($id)
	{
		$snippets = Snippet::find($id);
		$categories = SnippetCat::orderBy('id', 'ASC')->get();

		return response()->json(['snippets' => $snippets, 'categories' => $categories]);
	}



	/**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
	public function edit($id)
	{
		//$snippets = Snippet::find($id);
		//$categories = SnippetCat::orderBy('id', 'ASC')->get();

		//return response()->json(['snippets' => $snippets, 'categories' => $categories]);
		return response()->json(['snippets' => 'from edit']);
	}



	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		// Get all inputs
		$category = $request->input('category');
		$name = $request->input('name');
		$snippet = $request->input('snippet');
		$reference_url = $request->input('reference_url');

		// Create the new snippet
		$Snippet = Snippet::create([
			'snippet_cat_id' => $category,
			'name' => $name,
			'snippet' => $snippet,
			'reference_url' => $reference_url
		]);

		return response()->json(array('successMessage' => 'Snippet Saved!'));
	   
	}



	/**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
	public function update($id)
    {
        return response()->json(array('successMessage' => 'Snippet Updated!'));

        // validate
        // read more on validation at http://laravel.com/docs/validation
        // $rules = array(
        //     'name'       => 'required',
        //     'email'      => 'required|email',
        //     'nerd_level' => 'required|numeric'
        // );

        // $validator = Validator::make(Input::all(), $rules);

        // // process the login
        // if ($validator->fails()) {
        //     return Redirect::to('nerds/' . $id . '/edit')
        //         ->withErrors($validator)
        //         ->withInput(Input::except('password'));
        // } else {
        //     // store
        //     $nerd = Nerd::find($id);
        //     $nerd->name       = Input::get('name');
        //     $nerd->email      = Input::get('email');
        //     $nerd->nerd_level = Input::get('nerd_level');
        //     $nerd->save();

        //     // redirect
        //     //Session::flash('message', 'Successfully updated nerd!');
        //     //return Redirect::to('nerds');

        //     return response()->json(array('successMessage' => 'Snippet Updated!'));
        // }

    }



}
