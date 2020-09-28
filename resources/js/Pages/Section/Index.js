import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';

const Index = () => {
    const { department, sections } = usePage();

    function destroy(id) {
        if (confirm('Are you sure you want to delete this Section?')) {
          Inertia.delete(route('sections.destroy', id));
        }
      }

    return (
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('sections.create', department.id)} className="btn btn-alt-primary"> Create Section</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Section Name</th>
                    <th className="d-none d-sm-table-cell">Section Name</th>
                    <th className="d-none d-sm-table-cell" >Organization </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {sections.map((section, index)=>(
                    <tr key={section.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{department.name}</td>
                        <td className="d-none d-sm-table-cell">{section.name}</td>
                        <td className="d-none d-sm-table-cell">
                            {section.organization}
                        </td>
                        <td className="text-center">
                        <InertiaLink href={route('sections.show', section.id)} className="btn btn-circle btn-alt-success mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="View Sections" title="View Sections">
                            <i className="fa fa-eye"></i>
                        </InertiaLink>
                        <InertiaLink href={route('units.create', section.id)} className="btn btn-circle btn-alt-info mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Create Sections" title="Create Sections">
                            <i className="fa fa-plus"></i>
                        </InertiaLink>
                        <InertiaLink href={route('sections.edit',[department.id , section.id])} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Section" title="Edit Section">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton onDelete={destroy(section.id)} className="btn-circle mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Delete Section" title="Delete Section">
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