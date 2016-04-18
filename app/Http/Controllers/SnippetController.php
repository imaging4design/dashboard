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
		$snippets = Snippet::with('snippetCat')->where('snippet_cat_id', $id)->orderBy('id', 'ASC')->get();

		return response()->json(['snippets' => $snippets, 'categories' => $categories]);
	}



	/**
	 * Display a single snippet (contents)
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$categories = SnippetCat::orderBy('id', 'ASC')->get();
		$snippets = Snippet::find($id);

		return response()->json(['snippets' => $snippets, 'categories' => $categories]);
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

		// Create the new snippet
		$Snippet = Snippet::create([
			'snippet_cat_id' => $category,
			'name' => $name,
			'snippet' => $snippet
		]);

		return response()->json(array('successMessage' => 'Snippet Saved!'));
	   
	}



}
