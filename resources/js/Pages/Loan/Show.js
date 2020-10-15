import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';
import DropdownMenuItem from '@/Shared/DropdownMenuItem'


const Show = () => {
    const { loan, refunds } = usePage();

    return (
    <BlockCard title="Project Loan Refunds">
        <div className="table-responsive push">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center" style={{width: '60px'}}></th>
                        <th className="text-center" style={{width: '90px'}}>Description</th>
                        <th className="text-right" style={{width: "120px"}}>Return Date</th>
                        <th className="text-right" style={{width: "120px"}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {!refunds? <tr><td colSpan="4" className="text-center"> No Data Available</td></tr> :
                    refunds.map((refund, index)=>(
                        <tr key={index}>
                            <td className="text-center">{index+1}
                            <DropdownMenuItem icon="fa fa-pencil">
                                <InertiaLink href={route('loan_refunds.edit',refund.id)} className="dropdown-item">
                                    <i className="fa fa-edit"></i> Edit
                                </InertiaLink>
                                <DeleteButton 
                                message="Are you sure you want to delete this Refund?" 
                                link="loan_refunds.destroy"
                                id={refund.id} 
                                classNameName="dropdown-item">
                                    <i classNameName="fa fa-trash"></i> Delete
                                </DeleteButton>
                            </DropdownMenuItem>
                            </td>
                            <td>
                                <p className="font-w600 mb-5">{refund.description}</p>
                            </td>
                            <td className="text-right">{refund.returned_date}</td>
                            <td className="text-right">{refund.amount} Tsh</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3" className="font-w600 text-right">Subtotal</td>
                        <td className="text-right">{refunds.length == 0 ? 0 : refunds.map(item => item.amount).reduce((prev, next) => prev + next)} Tsh</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="font-w600 text-right">Loan Issued</td>
                        <td className="text-right">{loan.amount} Tsh</td>
                    </tr>
                    <tr className="table-warning">
                        <td colSpan="3" className="font-w700 text-uppercase text-right">Total Unpaid</td>
                        <td className="font-w700 text-right">{loan.amount - (refunds.length == 0 ? 0 : refunds.map(item => item.amount).reduce((prev, next) => prev + next))} Tsh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </BlockCard>
    )
}
Show.layout = page => <Layout children={page} />;

export default Show;

