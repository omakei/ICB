import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';
import DropdownMenuItem from '@/Shared/DropdownMenuItem'

const Show = () => {
    const { project, expenditures, client_payments, organization, client, project_summary } = usePage();
    
    return (
    <BlockCard title="Project List">
        <div className="col-md-12 mb-3">
            <InertiaLink href={route('expenditures.create', project.id)} className="btn btn-alt-primary mr-3"> Add Expenditure</InertiaLink>
            <InertiaLink href={route('client_payments.create', project.id)} className="btn btn-alt-success mr-3"> Add client Payment</InertiaLink>
            <InertiaLink href={route('loans.create',project.id)} className="btn btn-alt-warning mr-3"> Add Loan</InertiaLink>
        </div>
        <div className="block">
            <div className="block-header block-header-default">
            <h3 className="block-title">{project.name}</h3>
                <div className="block-options">
                    <button type="button" className="btn-block-option" >
                        <i className="si si-printer"></i> Print Project Summary
                    </button>
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="fullscreen_toggle"><i className="si si-size-fullscreen"></i></button>
                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                        <i className="si si-refresh"></i>
                    </button>
                </div>
            </div>
            <div className="block-content">
                <div className="row my-20">
                    <div className="col-6">
                        <p className="h3">{organization.name}</p>
                        <address>
                           {organization.address}<br/>
                           {organization.contact}<br/>
                           {organization.fax}<br/>
                            {organization.email}<br/>
                            {organization.website}
                        </address>
                    </div>
                    <div className="col-6 text-right">
                    <p className="h3">{client.name}</p>
                        <address>
                           {client.address}<br/>
                           {client.contact}<br/>
                           {client.fax}<br/>
                            {client.email}<br/>
                            {client.website}
                        </address>
                    </div>
                </div>

                <div className="table-responsive push">
                <p className="h4 text-center">Instaldment Payments</p>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center" style={{width: "60px"}}></th>
                                <th>Accont Number</th>
                                <th className="text-center" style={{width: "90px"}}>Receipt</th>
                                <th className="text-right" style={{width: "120px"}}>Date Paid</th>
                                <th className="text-right" style={{width: "120px"}}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!client_payments? <tr><td colSpan="5" className="text-center">No Data available</td></tr> :
                            client_payments.map((payment, index)=>(
                                <tr key={index}>
                                    <td className="text-center">{index+1}
                                    <DropdownMenuItem icon="fa fa-pencil">
                                        <InertiaLink href={route('client_payments.edit',payment.id)} className="dropdown-item">
                                            <i className="fa fa-edit"></i> Edit
                                        </InertiaLink>
                                        <DeleteButton 
                                            message="Are you sure you want to delete this Client Payment?" 
                                            link="client_payments.destroy"
                                            id={payment.id} className="dropdown-item">
                                            <i className="fa fa-trash"></i> Delete
                                        </DeleteButton>
                                    </DropdownMenuItem>
                                    </td>
                                    <td>
                                        <p className="font-w600 mb-5">{payment.account_number}</p>
                                    </td>
                                    <td className="text-center">
                                        {payment.receipt}
                                    </td>
                                    <td className="text-right">{payment.date_paid}</td>
                                    <td className="text-right">{payment.amount} Tsh</td>
                                </tr>
                            ))}
                            
                            <tr className="table-success">
                                <td colspan="4" className="font-w600 text-right">Subtotal</td>
                                <td className="text-right">{client_payments.map(item => item.amount).reduce((prev, next) => prev + next)} Tsh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-responsive push">
                <p className="h4 text-center">Detailed Expenditures</p>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center" style={{width: "60px"}}></th>
                                <th>Payee</th>
                                <th className="text-center" style={{width: "120px"}}>Payment Voucher</th>
                                <th className="text-left" >Particular</th>
                                <th className="text-right" style={{width: "120px"}}>Date Paid</th>
                                <th className="text-right" style={{width: "120px"}}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!expenditures? <tr><td colSpan="6" className="text-center">No Data available</td></tr> :
                            expenditures.map((payment, index)=>(
                                <tr key={index}>
                                    <td className="text-center">{index+1}
                                    <DropdownMenuItem icon="fa fa-pencil">
                                        <InertiaLink href={route('expenditures.edit',payment.id)} className="dropdown-item">
                                            <i className="fa fa-edit"></i> Edit
                                        </InertiaLink>
                                        <DeleteButton 
                                        message="Are you sure you want to delete this Expenditure?" 
                                        link="expenditures.destroy"
                                        id={payment.id} 
                                        className="dropdown-item">
                                            <i className="fa fa-trash"></i> Delete
                                        </DeleteButton>
                                    </DropdownMenuItem>
                                    </td>
                                    <td>
                                        <p className="font-w600 mb-5">{payment.payee}</p>
                                    </td>
                                    <td className="text-center">
                                        {payment.payment_voucher}
                                    </td>
                                    <td className="text-left">
                                        {payment.particular}
                                    </td>
                                    <td className="text-right">{payment.date_paid}</td>
                                    <td className="text-right">{payment.amount} Tsh</td>
                                </tr>
                            ))}
                            
                            <tr className="table-success">
                                <td colspan="5" className="font-w600 text-right">Subtotal</td>
                                <td className="text-right">{expenditures.map(item => item.amount).reduce((prev, next) => prev + next)} Tsh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-responsive push">
                <p className="h4 text-center">Institute Income Summary</p>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center" style={{width: "60px"}}></th>
                                <th className="text-left">Description</th>
                                <th className="text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!project_summary?                  
                            <tr>
                                <td colspan="3" className="font-w600 text-center">No Data available</td>
                                
                            </tr> :
                            project_summary.map((summary, index) => (
                                <tr key={index+1}>
                                    <td>
                                        {index + 1}
                                    </td>
                                     <td className="text-left">
                                        {summary.description}
                                    </td>
                                    <td className="text-right">
                                        {summary.amount} Tsh
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>

                <p className="text-muted text-center">Thank you very much for doing business with us. We look forward to working with you again!</p>
                
            </div>
        </div>
    </BlockCard>
    )
}
Show.layout = page => <Layout children={page} />;

export default Show;