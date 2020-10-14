<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expenditure extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $dates = [
        'date_paid'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
