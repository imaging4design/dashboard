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
		$all_snippets = Snippet::orderBy('name', 'ASC')->get();
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
		$snippets = Snippet::with('snippetCat')->where('snippet_cat_id', $id)->orderBy('name', 'ASC')->get();

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
	public function update(Request $request, $id)
    {
    	$snippet = Snippet::find($id);
    	$snippet->name = $request->input('name');
		$snippet->snippet = $request->input('snippet');
		$snippet->reference_url = $request->input('reference_url');
        
        $snippet->save();

        return response()->json(array('successMessage' => 'Snippet Updated!'));
        
    }



    /**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Snippet::destroy($id);
		return response()->json(array('successMessage' => 'Snippet Deleted!'));
	}


}
