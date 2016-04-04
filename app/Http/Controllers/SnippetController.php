<?php

namespace Dashboard\Http\Controllers;

use Dashboard\Http\Response;
use Dashboard\Http\Requests;
use Dashboard\Snippet;
use Dashboard\SnippetCat;



class SnippetController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $all_snippets = Snippet::orderBy('name', 'ASC')->get();
        $all_snippetCats = SnippetCat::get();
        //return response()->json([$all_snippets, $all_snippetCats]);

        return response()->json(['all_snippets' => $all_snippets, 'all_snippetCats' => $all_snippetCats]);
    }



    /**
     * Show the specified photo comment.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $snippets = Snippet::find($id);

        return response()->json($snippets);
        //return response()->json($snippets);

        //return Response::json(array('success' => true));
    }



}
