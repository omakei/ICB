import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { clients } = usePage();

    

    return (
    <BlockCard title="Clients List">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('clients.create')} className="btn btn-alt-primary"> Create Client</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th> Name</th>
                    <th className="d-none d-sm-table-cell">Address </th>
                    <th className="d-none d-sm-table-cell">Contact </th>
                    <th className="d-none d-sm-table-cell">Email </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client, index)=>(
                    <tr key={client.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{client.name}</td>
                        <td className="d-none d-sm-table-cell">{client.address}</td>
                        <td className="d-none d-sm-table-cell">{client.contact}</td>
                        <td className="d-none d-sm-table-cell">{client.email}</td>
                        <td className="text-center">
                        <InertiaLink href={route('clients.edit',client.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Client" title="Edit Client">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Client?" 
                        link="clients.destroy"
                        id={client.id}
                        className="btn-circle mr-5 mb-5" >
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