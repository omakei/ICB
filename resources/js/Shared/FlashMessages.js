import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';

export default () => {
  const [visible, setVisible] = useState(true);
  const { success, error } = usePage();

  return (
    <div className={`toast ${success? 'bg-success': 'bg-danger'}`} aria-atomic="true" data-delay="10000" data-autohide="true" style={{position: 'absolute', top: 0, right: 0}}>
    <div className={`toast-header text-white ${success? 'bg-success': 'bg-danger'}`}>
      <strong className="mr-auto text-white">Success</strong>
      <small className="text-white">Just Now</small>
      <button type="button" className="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="toast-body bg-success text-white">
      {success?success:error}
    </div>
  </div>
  );
};



