<?php

namespace Dashboard;

use Illuminate\Database\Eloquent\Model;

class SnippetCat extends Model
{
    // Let Eloquent know the following attributes will be available for mass assignment
	protected $fillable = array( 'id', 'category', 'created_at', 'updated_at' );

	public $timestamps = true;

	// Relationships ...
	public function snippet() {
		//return $this->hasMany('Snippet');
		return $this->hasMany('Dashboard\Snippet');
	}

	
}
