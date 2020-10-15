import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { loans } = usePage();

    return (
    <BlockCard title="Project Loans">
    {/* <div className="col-md-12 mb-3">
        <InertiaLink href={route('loans.create')} className="btn btn-alt-primary"> Create Project Loan</InertiaLink>
    </div> */}
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Project Name</th>
                    <th>Consultant Name</th>
                    <th>Loan Amount</th>
                    <th className="d-none d-sm-table-cell">Description </th>
                    <th>Issued Date</th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {loans.map((loan, index)=>(
                    <tr key={loan.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{loan.project}</td>
                        <td className="font-w600">{loan.consaltants.map((consaltant)=>(consaltant.first_name + " "+consaltant.middle_name + " "+consaltant.last_name+" /"))}</td>
                        <td className="font-w600">{loan.amount}</td>
                        <td className="d-none d-sm-table-cell">{loan.description}</td>
                        <td className="font-w600">{loan.issued_date}</td>
                        <td className="text-center">
                        <InertiaLink href={route('loans.show',loan.id)} className="btn btn-circle btn-alt-info mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Add Project Loan Refund" title="Add Project Loan Refund">
                            <i className="fa fa-eye"></i>
                        </InertiaLink>
                        <InertiaLink href={route('loan_refunds.create',loan.id)} className="btn btn-circle btn-alt-info mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Add Project Loan Refund" title="Add Project Loan Refund">
                            <i className="fa fa-plus"></i>
                        </InertiaLink>
                        <InertiaLink href={route('loans.edit',loan.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Project Loan" title="Edit Project Loan">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Loan?" 
                        link="loans.destroy"
                        id={loan.id} 
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