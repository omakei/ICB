<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $dates = [
        'issued_date'
    ];

    public function loan_refunds()
    {
        return $this->hasMany(LoanRefund::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
