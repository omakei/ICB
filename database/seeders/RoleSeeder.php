<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' =>'superuser', 
                'description' =>'System root user the whole system' 
            ],
            [
                'name' => 'HOD',
                'description' => 'head of department'
            ],
            [
                'name' => 'Manager',
                'description' => 'Manager of ICB department',
            ],
            [
                'name' => 'Lecture',
                'description' => 'academic lecture'
            ],
           
        ];

    foreach ($roles as ['name' => $name, 'description' => $description]) 
    {
    $role_exists = DB::table('roles')->where('name', $name)->first();

    if($role_exists)
            continue;

        DB::table('roles')->insert([
            'name' => $name,
            'description' => $description,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
    }
}
