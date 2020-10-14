import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { expenditures } = usePage();

    return (
    <BlockCard title="Project Expenditure">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('expenditures.create')} className="btn btn-alt-primary"> Create Project Expenditure</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Project Name</th>
                    <th className="d-none d-sm-table-cell">Date </th>
                    <th className="d-none d-sm-table-cell">Amount </th>
                    <th className="d-none d-sm-table-cell">Payment Voucher </th>
                    <th className="d-none d-sm-table-cell">Payee </th>
                    <th className="d-none d-sm-table-cell">Particular </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {expenditures.map((expenditure, index)=>(
                    <tr key={expenditure.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{expenditure.project}</td>
                        <td className="d-none d-sm-table-cell">{expenditure.date_paid}</td>
                        <td className="d-none d-sm-table-cell">{expenditure.amount}</td>
                        <td className="d-none d-sm-table-cell">{expenditure.payment_voucher}</td>
                        <td className="d-none d-sm-table-cell">{expenditure.payee}</td>
                        <td className="d-none d-sm-table-cell">{expenditure.particular}</td>
                        <td className="text-center">
                        <InertiaLink href={route('expenditures.edit',expenditure.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Project expenditure" title="Edit Project expenditure">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton 
                        message="Are you sure you want to delete this Expenditure?" 
                        link="expenditures.destroy"
                        id={expenditure.id} 
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