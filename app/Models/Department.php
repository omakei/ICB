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
        return self::where('parent_id', null)->where('type', 'department')->get();
    }

    public function sections()
    {
        return self::where('parent_id', $this->id)->where('type', 'section')->get();
    }

    public function units()
    {
        return self::where('parent_id', $this->id)->where('type', 'unity')->get();
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
