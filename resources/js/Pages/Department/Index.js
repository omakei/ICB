import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';

const Index = () => {
    const { departments } = usePage();

    function destroy(id) {
        if (confirm('Are you sure you want to delete this Department?')) {
          Inertia.delete(route('organizations.destroy', id));
        }
      }

    return (
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('departments.create')} className="btn btn-alt-primary"> Create Department</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Department Name</th>
                    <th className="d-none d-sm-table-cell">Department Type</th>
                    <th className="d-none d-sm-table-cell" >Organization </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((department, index)=>(
                    <tr key={department.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{department.name}</td>
                        <td className="d-none d-sm-table-cell">{department.is_academic? (<span className="badge badge-success">Accademic department</span>): (<span className="badge badge-primary">Non Accademic department</span>)}</td>
                        <td className="d-none d-sm-table-cell">
                            {department.organization}
                        </td>
                        <td className="text-center">
                        <InertiaLink href={route('departments.show', department.id)} className="btn btn-circle btn-alt-success mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="View Sections" title="View Sections">
                            <i className="fa fa-eye"></i>
                        </InertiaLink>
                        <InertiaLink href={route('sections.create', department.id)} className="btn btn-circle btn-alt-info mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Create Sections" title="Create Sections">
                            <i className="fa fa-plus"></i>
                        </InertiaLink>
                        <InertiaLink href={route('departments.edit',department.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Department" title="Edit Department">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton onDelete={destroy(department.id)} className="btn-circle mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Delete Department" title="Delete Department">
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