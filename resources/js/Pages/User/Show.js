import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { user_details } = usePage();

    function destroy(id) {
        if (confirm('Are you sure you want to delete this Unit?')) {
          Inertia.delete(route('userdetails.destroy', id));
        }
      }

    return (
<main id="main-container" style="min-height: 309.5px;">
    <div class="bg-image bg-image-bottom" style="background-image: url('assets/media/photos/photo13@2x.jpg');">
        <div class="bg-primary-dark-op py-30">
            <div class="content content-full text-center">
                <div class="mb-15">
                    <a class="img-link" href="be_pages_generic_profile.html">
                        <img class="img-avatar img-avatar96 img-avatar-thumb" src="assets/media/avatars/avatar15.jpg" alt=""/>
                    </a>
                </div>
                <h1 class="h3 text-white font-w700 mb-10">
                    John Smith
                </h1>
                <h2 class="h5 text-white-op">
                    Product Manager <a class="text-primary-light" href="javascript:void(0)">@GraphicXspace</a>
                </h2>
                <button type="button" class="btn btn-rounded btn-hero btn-sm btn-alt-success mb-5">
                    <i class="fa fa-plus mr-5"></i> Add Friend
                </button>
                <button type="button" class="btn btn-rounded btn-hero btn-sm btn-alt-primary mb-5">
                    <i class="fa fa-envelope-o mr-5"></i> Message
                </button>
                <a class="btn btn-rounded btn-hero btn-sm btn-alt-secondary mb-5 px-20" href="be_pages_generic_profile_edit.html">
                    <i class="fa fa-pencil"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="content">
        <h2 class="content-heading">
            <button type="button" class="btn btn-sm btn-rounded btn-alt-secondary float-right">View More..</button>
            <i class="si si-briefcase mr-5"></i> Projects
        </h2>
        <div class="row items-push">
            <div class="col-md-6 col-xl-3">
                <div class="block block-rounded ribbon ribbon-modern ribbon-primary text-center">
                    <div class="ribbon-box">$2500</div>
                    <div class="block-content block-content-full">
                        <div class="item item-circle bg-danger text-danger-light mx-auto my-20">
                            <i class="fa fa-globe"></i>
                        </div>
                        <div class="text-warning">
                            <i class="fa fa-fw fa-star"></i>
                            <i class="fa fa-fw fa-star"></i>
                            <i class="fa fa-fw fa-star"></i>
                            <i class="fa fa-fw fa-star"></i>
                            <i class="fa fa-fw fa-star"></i>
                        </div>
                    </div>
                    <div class="block-content block-content-full block-content-sm bg-body-light">
                        <div class="font-w600 mb-5">Website Design</div>
                        <div class="font-size-sm text-muted">https://example.com</div>
                    </div>
                    <div class="block-content block-content-full">
                        <a class="btn btn-rounded btn-alt-secondary" href="javascript:void(0)">
                            <i class="fa fa-briefcase mr-5"></i>View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
    )
}
Show.layout = page => <Layout children={page} />;

export default Show;