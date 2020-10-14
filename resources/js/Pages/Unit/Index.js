import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';

const Index = (id) => {
    const { units, section } = usePage();

    return (
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('units.create', section.id)} className="btn btn-alt-primary"> Create Unit</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Section Name</th>
                    <th className="d-none d-sm-table-cell">Unit Name</th>
                    <th className="d-none d-sm-table-cell" >Organization </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {units.map((unit, index)=>(
                    <tr key={unit.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{section.name}</td>
                        <td className="d-none d-sm-table-cell">{unit.name}</td>
                        <td className="d-none d-sm-table-cell">
                            {unit.organization}
                        </td>
                        <td className="text-center">
                        <InertiaLink href={route('units.edit',[section.id ,unit.id])} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Unit" title="Edit Unit">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Unit?" 
                        link="units.destroy"
                        id={unit.id} 
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