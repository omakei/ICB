<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;

class UserDetails extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    public function account()
    {
        return $this->hasOne(User::class, 'user_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
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
