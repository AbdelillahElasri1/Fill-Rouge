<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Realstate extends Model
{
    use HasFactory;

    protected $fillable = ['titre','price','street', 'image'];
    public function user(){
        return $this->belongsTo('App\Models\User');
    }
    
}
