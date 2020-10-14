import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import TextAreaInput from '@/Shared/TextAreaInput'
import DatePeakerInput from '@/Shared/DatePeakerInput'

const Create = () => {
  const { project, errors } = usePage();
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    amount:  '',
    description: '',
    issued_date: '',
    project_id: project.id
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [key]: value
    }));
  }

  function handleDateChange(value) {

    setValues(values => ({
      ...values,
      issued_date: value
    }));

  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('loans.store'), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Create Project Loan">

      <form onSubmit={handleSubmit}>
        <TextInput
          className="col-md-8"
          label="Amount"
          name="amount"
          type="text"
          errors={errors.amount}
          value={values.amount}
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
        <DatePeakerInput
          className="col-md-8"
          label="Issued Date"
          name="issued_date"
          type="text"
          errors={errors.issued_date}
          value={values.issued_date}
          onChange={handleDateChange}
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
Create.layout = page => <Layout children={page} />;

export default Create;