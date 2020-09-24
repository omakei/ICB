<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoardRegistrationUserDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('board_registration_user_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('board_registration_id');
            $table->foreign('board_registration_id', 'br_id_foreign')->references('id')->on('board_registrations')->onDelete('cascade');
            $table->unsignedBigInteger('user_details_id');
            $table->foreign('user_details_id', 'brud_id_foreign')->references('id')->on('user_details')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('board_registration_user_details');
    }
}
