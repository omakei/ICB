<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'view-project']);
        Permission::create(['name' => 'edit-project']);
        Permission::create(['name' => 'add-project']);
        Permission::create(['name' => 'delete-project']);

        Permission::create(['name' => 'view-user']);
        Permission::create(['name' => 'edit-user']);
        Permission::create(['name' => 'add-user']);
        Permission::create(['name' => 'delete-user']);

        Permission::create(['name' => 'view-loan']);
        Permission::create(['name' => 'edit-loan']);
        Permission::create(['name' => 'add-loan']);
        Permission::create(['name' => 'delete-loan']);

        Permission::create(['name' => 'view-refund']);
        Permission::create(['name' => 'edit-refund']);
        Permission::create(['name' => 'add-refund']);
        Permission::create(['name' => 'delete-refund']);

        Permission::create(['name' => 'view-client']);
        Permission::create(['name' => 'edit-client']);
        Permission::create(['name' => 'add-client']);
        Permission::create(['name' => 'delete-client']);

        Permission::create(['name' => 'view-board']);
        Permission::create(['name' => 'edit-board']);
        Permission::create(['name' => 'add-board']);
        Permission::create(['name' => 'delete-board']);

        Permission::create(['name' => 'view-certificate']);
        Permission::create(['name' => 'edit-certificate']);
        Permission::create(['name' => 'add-certificate']);
        Permission::create(['name' => 'delete-certificate']);

        Role::create(['name' => 'manager'])->givePermissionTo(Permission::all());
           
        Role::create(['name' => 'superuser'])->givePermissionTo(Permission::all());

        Role::create(['name' => 'accountant'])->givePermissionTo(Permission::all());

        Role::create(['name' => 'hod'])->givePermissionTo([
            'view-user',
            'edit-user',
            'add-user',
            'delete-user',
            'view-project',
            'view-board',
            'edit-board',
            'add-board',
            'delete-board',
            'view-certificate',
            'edit-certificate',
            'add-certificate',
            'delete-certificate',
        ]);

        Role::create(['name' => 'consaltant'])->givePermissionTo([
            'view-project',
        ]);
        
    }
}
