import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';

const Index = () => {
    const { organization, creatable } = usePage();

    return (
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        {creatable && <InertiaLink href={route('organizations.create')} className="btn btn-alt-primary"> Create an Organization</InertiaLink>}
    </div>
    {creatable==true? '' :
    (<div className="col-md-6 col-xl-4">
        <div className="block">
            <div className="block-content block-content-full text-center bg-gd-sea">
                <div className="p-20 mb-10">
                    <i className="fa fa-3x fa-steam text-white-op"></i>
                </div>
                <p className="font-size-lg font-w600 text-white mb-0">
                    {organization.name}
                </p>
                <p className="font-size-sm text-uppercase font-w600 text-white-op mb-0">
                <InertiaLink href={route('organizations.edit', organization.id)} className="btn btn-alt-success"> Edit</InertiaLink>
                </p>
            </div>
            <div className="block-content block-content-full px-0 py-5">
                <table className="table table-borderless table-striped table-hover mb-0">
                    <tbody>
                        <tr>
                            
                            <td>
                                <strong>Address</strong>
                            </td>
                            <td className="text-center" >
                                <strong className="text-primary">{organization.address}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Contact</strong>
                            </td>
                            <td className="text-center">
                                <strong className="text-primary">{organization.contact}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Fax</strong>
                            </td>
                            <td className="text-center">
                                <strong className="text-primary">{organization.fax}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Email</strong>
                            </td>
                            <td className="text-center">
                                <strong className="text-primary">{organization.email}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Website</strong>
                            </td>
                            <td className="text-center">
                                <strong className="text-primary">{organization.website}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="block-content block-content-full text-center bg-body-light">
                <InertiaLink class="btn btn-alt-secondary" href={route('departments.index')}>
                    <i class="fa fa-eye mr-5"></i> Show Departments
                </InertiaLink>
            </div>
        </div>
    </div>)}
    </BlockCard>
    )
}
Index.layout = page => <Layout children={page} />;

export default Index;