import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import SelectInput from '@/Shared/SelectInput'

const Status =  ()=>{
  const { project, statuses, errors } = usePage();
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    status: '',
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [key]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('projects.update_status', project.id), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Edit Project Status">

      <form onSubmit={handleSubmit}>
        <SelectInput
          className="col-md-8"
          label="Status"
          name="status"
          type="text"
          errors={errors.status}
          value={values.status}
          onChange={handleChange}
        >
        <option selected>Select Status</option>
        {statuses.map((status)=>(
          <option value={status.value}>{status.label}</option>
        ))}
      
        </SelectInput>
        
        <div class="form-group pl-20">
          <LoadingButton
            type="submit"
            loading={sending}
            className="btn btn-alt-primary">
            <i class="si si-login mr-10"></i> Save Changes</LoadingButton>
        </div>
      </form>

    </BlockCard>
  )
}
Status.layout = page => <Layout children={page} />;

export default Status;