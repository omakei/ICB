import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { payments } = usePage();

    return (
    <BlockCard title="Client Project Payment">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('client_payments.create')} className="btn btn-alt-primary"> Create Client Payment</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Project Name</th>
                    <th className="d-none d-sm-table-cell">Date </th>
                    <th className="d-none d-sm-table-cell">Amount </th>
                    <th className="d-none d-sm-table-cell">Account Number </th>
                    <th className="d-none d-sm-table-cell">Receipt </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment, index)=>(
                    <tr key={payment.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{payment.project}</td>
                        <td className="d-none d-sm-table-cell">{payment.date_paid}</td>
                        <td className="d-none d-sm-table-cell">{payment.amount}</td>
                        <td className="d-none d-sm-table-cell">{payment.account_number}</td>
                        <td className="d-none d-sm-table-cell">{payment.receipt}</td>
                        <td className="text-center">
                        <InertiaLink href={route('client_payments.edit',payment.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Client Payment" title="Edit Client Payment">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Client Payment?" 
                        link="client_payments.destroy"
                        id={payment.id} 
                        className="btn-circle mr-5 mb-5 " >
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