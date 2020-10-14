import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import TextAreaInput from '@/Shared/TextAreaInput'
import SelectInput from '@/Shared/SelectInput'
import MultiSelectInput from '@/Shared/MultiSelectInput'
import DatePeakerInput from '@/Shared/DatePeakerInput'

const Edit =  ()=>{
  const { project, users, departments, clients, errors } = usePage();
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    name: project.name ||  '',
    description: project.description || '',
    contract_sum_vat_exclusive: project.contract_sum_vat_exclusive|| '',
    contract_sum_vat_inclusive:  project.contract_sum_vat_inclusive || '',
    client_id: project.client_id || '',
    department_id: project.department_id || '',
    userdetail_id: project.userdetail_id || '',
    start_date: project.start_date || '',
    end_date: project.end_date || ''
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [key]: value
    }));
  }

  function handleStartDateChange(value) {

    setValues(values => ({
      ...values,
      start_date: value
    }));

  }

  function handleEndDateChange(value) {

    setValues(values => ({
      ...values,
      end_date: value
    }));

  }

  function handleVAT(e) {
    const key = e.target.name;
    const value = e.target.value;

    if ( key === 'contract_sum_vat_exclusive') {
      setValues(values=> ({
        ...values,
        contract_sum_vat_exclusive: parseInt(value),
        contract_sum_vat_inclusive:  (parseInt(value) + parseInt(value)*0.18),
      }))
    }

    if (key === 'contract_sum_vat_inclusive') {
      setValues(values=> ({
        ...values,
        contract_sum_vat_inclusive: parseInt(value),
        contract_sum_vat_exclusive:  (parseInt(value) - parseInt(value)*0.18)
      }))
    }
    
  }

  function handleMultiSelectChange(newValue, actionMeta) {
    const key = actionMeta.name;
    const value = newValue;
    setValues(values => ({
      ...values,
      [key]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.put(route('projects.update', project.id), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Edit Project">

      <form onSubmit={handleSubmit}>
        <TextInput
          className="col-md-8"
          label="Project (Contract) Name"
          name="name"
          type="text"
          errors={errors.name}
          value={values.name}
          onChange={handleChange}
        />
        <TextAreaInput
          className="col-md-8"
          label="Description"
          name="description"
          type="text"
          errors={errors.description}
          value={values.description}
          onChange={handleChange}>
        </TextAreaInput>
        <TextInput
          className="col-md-8"
          label="Contract Sum VAT Exclusive"
          name="contract_sum_vat_exclusive"
          type="text"
          errors={errors.contract_sum_vat_exclusive}
          value={values.contract_sum_vat_exclusive}
          onChange={handleVAT}
        />
        <TextInput
          className="col-md-8"
          label="Contract Sum VAT Inclusive"
          name="contract_sum_vat_inclusive"
          type="text"
          errors={errors.contract_sum_vat_inclusive}
          value={values.contract_sum_vat_inclusive}
          onChange={handleVAT}
        />
        <SelectInput
          className="col-md-8"
          label="Client"
          name="client_id"
          type="text"
          errors={errors.client_id}
          value={values.client_id}
          onChange={handleChange}
        >
        <option selected>Select Client</option>
        {clients.map((client)=>(
          <option value={client.id}>{client.name}</option>
        ))}
      
        </SelectInput>
        <MultiSelectInput
            className="col-md-8"
            label="Department"
            name="department_id"
            options={departments}
            errors={errors.department_id}
            value={values.department_id}
            onChange={handleMultiSelectChange}
        />
         <MultiSelectInput
            className="col-md-8"
            label="Consaltant"
            name="userdetail_id"
            options={users}
            errors={errors.userdetail_id}
            value={values.userdetail_id}
            onChange={handleMultiSelectChange}
        />
         <DatePeakerInput
          className="col-md-8"
          label="Start Date"
          name="start_date"
          type="text"
          errors={errors.start_date}
          value={values.start_date}
          onChange={handleStartDateChange}
        />
        <DatePeakerInput
          className="col-md-8"
          label="End Date"
          name="end_date"
          type="text"
          errors={errors.end_date}
          value={values.end_date}
          onChange={handleEndDateChange}
        />
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
Edit.layout = page => <Layout children={page} />;

export default Edit;