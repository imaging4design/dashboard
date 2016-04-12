<?php

namespace Dashboard;

use Illuminate\Database\Eloquent\Model;

class Snippet extends Model
{
    // Let Eloquent know the following attributes will be available for mass assignment
	protected $fillable = array( 'id', 'snippet_cat_id', 'name', 'snippet', 'created_at', 'updated_at' );

	public $timestamps = true;

	// Relationships ...
	public function snippetCat() {
		//return $this->hasOne('SnippetCat');
		return $this->belongsTo('Dashboard\SnippetCat');
	}

}