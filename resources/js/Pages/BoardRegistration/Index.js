import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import BlockCard from '../../Shared/BlockCard';
import Layout from '@/Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import { Inertia } from '@inertiajs/inertia';

const Index = () => {
    const { boards } = usePage();

    function destroy(id) {
        if (confirm('Are you sure you want to delete this Board?')) {
          Inertia.delete(route('boardregistrations.destroy', id));
        }
      }

    return (
    <BlockCard title="Organization Stracture">
    <div className="col-md-12 mb-3">
        <InertiaLink href={route('boardregistrations.create')} className="btn btn-alt-primary"> Create Board Registration</InertiaLink>
    </div>
    <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
            <thead>
                <tr>
                    <th className="text-center"></th>
                    <th>Board Registration Name</th>
                    <th className="d-none d-sm-table-cell">Description </th>
                    <th className="text-center" >Acation</th>
                </tr>
            </thead>
            <tbody>
                {boards.map((board, index)=>(
                    <tr key={board.id}>
                        <td className="text-center">{index+1}</td>
                        <td className="font-w600">{board.board_name}</td>
                        <td className="d-none d-sm-table-cell">{board.description}</td>
                        <td className="text-center">
                        <InertiaLink href={route('boardregistrations.edit',board.id)} className="btn btn-circle btn-alt-primary mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Edit Board Registration" title="Edit Board Registration">
                            <i className="fa fa-edit"></i>
                        </InertiaLink>
                        <DeleteButton onDelete={destroy(board.id)} className="btn-circle mr-5 mb-5 js-tooltip-enabled" data-toggle="tooltip" data-placement="top" data-original-title="Delete Board Registration" title="Delete Board Registration">
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