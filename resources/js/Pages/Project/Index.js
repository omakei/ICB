import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { projects } = usePage();
    
    return (
    <BlockCard title="Project List">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('projects.create')} className="btn btn-alt-primary"> Create Project (Contract)</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Project (Contract) Name</th>
                    <th className="d-none d-sm-table-cell">Constract Sum (VAT Inclusive) </th>
                    <th>Remarks</th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project, index)=>(
                    <tr key={project.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{project.name}</td>
                        <td className="font-w600">{project.contract_sum_vat_inclusive}</td>
                        <td className="d-none d-sm-table-cell"><span className="badge badge-pill badge-primary">{project.remarks}</span></td>
                        <td className="text-center">
                        <InertiaLink href={route('projects.show',project.id)} className="btn btn-circle btn-alt-success mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Show Project" title="Show Project">
                            <i className="fa fa-eye"></i>
                        </InertiaLink>
                        <InertiaLink href={route('projects.edit',project.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Project" title="Edit Project">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Project (Contract)?" 
                        link="projects.destroy"
                        id={project.id} 
                        className="btn-circle mr-5 mb-5">
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