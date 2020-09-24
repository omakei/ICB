<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationCertificateUserDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_certificate_user_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('education_certificate_id');
            $table->foreign('education_certificate_id', 'ed_id_foreign')->references('id')->on('education_certificates')->onDelete('cascade');
            $table->unsignedBigInteger('user_details_id');
            $table->foreign('user_details_id', 'ud_id_foreign')->references('id')->on('user_details')->onDelete('cascade');
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
        Schema::dropIfExists('education_certificate_user_details');
    }
}
