<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function getDepartment()
    {
        # code...
    }

    public function getSection()
    {
        # code...
    }

    public function getUnity()
    {
        # code...
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
