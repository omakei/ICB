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
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('userdetails.create')} className="btn btn-alt-primary"> Create User</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Full Name</th>
                    <th className="d-none d-sm-table-cell">Mobile Number</th>
                    <th className="d-none d-sm-table-cell" >Department </th>
                    <th className="d-none d-sm-table-cell" >Activation Code </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {user_details.map((user, index)=>(
                    <tr key={user.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{user.first_name + ' ' + user.middle_name+ ' ' + user.last_name}</td>
                        <td className="d-none d-sm-table-cell">{user.mobile_number}</td>
                        <td className="d-none d-sm-table-cell">
                            {user.department}
                        </td>
                        <td className="d-none d-sm-table-cell">
                            {user.activation_code}
                        </td>
                        <td className="text-center">
                        <InertiaLink href={route('userdetails.show', user.id)} className="btn btn-circle btn-alt-success mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="View Sections" title="View Sections">
                            <i className="fa fa-eye"></i>
                        </InertiaLink>
                        <InertiaLink href={route('userdetails.edit',user.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Unit" title="Edit Unit">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton onDelete={destroy(user.id)} className="btn-circle mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Delete Unit" title="Delete Unit">
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