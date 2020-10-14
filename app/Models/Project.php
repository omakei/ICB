<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $dates = [
        'start_date', 'end_date'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function departments()
    {
        return $this->belongsToMany(Department::class);
    }

    public function user_details()
    {
        return $this->belongsToMany(UserDetails::class, 'user_details_project');
    }

    public function expenditures()
    {
        return $this->hasMany(Expenditure::class);
    }

    public function client_payments()
    {
        return $this->hasMany(ClientPayment::class);
    }

}
