import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { certificates } = usePage();

    function destroy(id) {
        if (confirm('Are you sure you want to delete this Certificate?')) {
          Inertia.delete(route('educationcertificates.destroy', id));
        }
      }

    return (
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('educationcertificates.create')} className="btn btn-alt-primary"> Create Certificate</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Certificate Name</th>
                    <th className="d-none d-sm-table-cell">Description </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {certificates.map((certificate, index)=>(
                    <tr key={certificate.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{certificate.certificate_name}</td>
                        <td className="d-none d-sm-table-cell">{certificate.description}</td>
                        <td className="text-center">
                        <InertiaLink href={route('educationcertificates.edit',certificate.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Certificate" title="Edit Certificate">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton onDelete={destroy(certificate.id)} className="btn-circle mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Delete Certificate" title="Delete Certificate">
                            <i className="fa fa-trash"></i>
                        </DeleteButton>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </BlockCard>
    )
}
Index.layout = page => <Layout children={page} />;

export default Index;