import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { refunds } = usePage();


    return (
    <BlockCard title="Project refunds">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('loan_refunds.create')} className="btn btn-alt-primary"> Create Project refund</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Project Name</th>
                    <th>Consultant Name</th>
                    <th>Loan Refund Amount</th>
                    <th className="d-none d-sm-table-cell">Description </th>
                    <th>Returned Date</th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {refunds.map((refund, index)=>(
                    <tr key={refund.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{refund.project}</td>
                        <td className="font-w600">{refund.consultant}</td>
                        <td className="font-w600">{refund.amount}</td>
                        <td className="d-none d-sm-table-cell">{board.description}</td>
                        <td className="font-w600">{refund.returned_date}</td>
                        <td className="text-center">
                        <InertiaLink href={route('laon_refunds.edit',refund.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Project refund" title="Edit Project refund">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Loan Refund?" 
                        link="loan_refunds.destroy"
                        id={refund.id}  
                        className="btn-circle mr-5 mb-5" 
                        >
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