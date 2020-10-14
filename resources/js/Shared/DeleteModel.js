import React from 'react'
import { Inertia } from '@inertiajs/inertia';


export default ({message, link, id, hash}) => {

    function handleDelete(e) {
        e.preventDefault();
        Inertia.delete(route(link, id));

    }

    return(
        <div className="modal" id={`modal-delete-${id}-${hash}`} tabindex="-1" style={{zIndex:999}} role="dialog" aria-labelledby={`modal-delete-${id}-${hash}`} aria-hidden="true">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="block block-themed block-transparent mb-0">
                        <div className="block-header bg-primary-danger">
                            <h3 className="block-title">Delete Action</h3>
                            <div className="block-options">
                                <button type="button" className="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i className="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content">
                            <p>{message}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-alt-danger" onClick={handleDelete} data-dismiss="modal">
                            <i className="fa fa-check"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}