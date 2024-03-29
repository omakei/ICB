<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanRefund extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $dates = [
        'returned_date'
    ];

    public function loan()
    {
        return $this->belongsTo(Loan::class);
    }
}
