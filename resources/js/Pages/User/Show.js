import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Show = () => {
    const { userdetail, projects, image, department, account } = usePage();

    return (
<main id="main-container" style={{minHeight: 309.5 + 'px'}}>
    <div className="bg-image bg-image-bottom" style={{backgroundImage: 'assets/media/photos/photo13@2x.jpg'}}>
        <div className="bg-primary-dark-op py-30">
            <div className="content content-full text-center">
                <div className="mb-15">
                    <a className="img-link" href="be_pages_generic_profile.html">
                        <img className="img-avatar img-avatar96 img-avatar-thumb" src={image} alt=""/>
                    </a>
                </div>
                <h1 className="h3 text-white font-w700 mb-10">
                    {userdetail.first_name + " "+ userdetail.middle_name +" "+ userdetail.last_name}
                </h1>
                <h2 className="h5 text-white-op">
                    {userdetail.title}<a className="text-primary-light" href="#">{department.name}</a>
                </h2>
                <button type="button" className={`btn btn-rounded btn-hero btn-sm btn-alt-${account.status==1?"info":"danger"} mb-5`}>
                    <i className="fa fa-wrench mr-5"></i>{account.status==1?"Disable":"Activate"} Account
                </button>
            </div>
        </div>
    </div>
    <div className="content">
        <h2 className="content-heading">
            <i className="si si-briefcase mr-5"></i>Featured Projects
        </h2>
        <div className="row items-push">
            {projects.map((project)=>(
                <div className="col-md-6 col-xl-3">
                <div className="block block-rounded ribbon ribbon-modern ribbon-primary text-center">
                    <div className="ribbon-box">{project.remarks}</div>
                    <div className="block-content block-content-full">
                        <div className="item item-circle bg-primary text-danger-light mx-auto my-20">
                            <i className="fa fa-briefcase"></i>
                        </div>
                    </div>
                    <div className="block-content block-content-full block-content-sm bg-body-light">
                        <div className="font-w600 mb-5">{project.name}</div>
                        <div className="font-size-sm text-muted">{project.client.name}</div>
                    </div>
                    <div className="block-content block-content-full">
                        <a className="btn btn-rounded btn-alt-secondary" href="#">
                            <i className="fa fa-briefcase mr-5"></i>View Project
                        </a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    <div className="content">
        <h2 className="content-heading">
            <i className="si si-key mr-5"></i>Permissions
        </h2>
        <div className="row items-push">
            <div className="block block-rounded mb-5 px-20 py-10">
                <div style={{display:"inline"}}>
                    <div className="text-center" style={{width: '50px', display:"inline"}}>
                        <label className="js-task-status css-control css-control-primary css-checkbox py-0">
                            <input type="checkbox" className="css-control-input" checked/>
                            <span className="css-control-indicator"></span>
                        </label>
                    </div>
                    <div className="js-task-content font-w600" style={{display:"inline"}}>
                        Contract Signing
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