<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function department()
    {
        # code ...
    }

    public function section()
    {
        # code ...
    }

    public function unity()
    {
        # code ...
    }

    public function board_registrations()
    {
        return $this->belongsToMany(BoardRegistration::class);
    }

    public function education_certificates()
    {
        return $this->belongsToMany(EducationCertificate::class);
    }
}
