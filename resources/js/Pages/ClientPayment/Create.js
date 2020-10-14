import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import DatePeakerInput from '@/Shared/DatePeakerInput'

const Create = () => {
  const { project, errors } = usePage();
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    amount:  '',
    date_paid: '',
    account_number: '',
    receipt: '',
    project_id: project.id,
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
      date_paid: value
    }));

  }


  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('client_payments.store'), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Create Client Payment">

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
         <DatePeakerInput
          className="col-md-8"
          label="Date Paid"
          name="date_paid"
          type="text"
          errors={errors.date_paid}
          value={values.date_paid}
          onChange={handleDateChange}
        />
        <TextInput
          className="col-md-8"
          label="Account Number"
          name="account_number"
          type="text"
          errors={errors.account_number}
          value={values.account_number}
          onChange={handleChange}
        />
        <TextInput
          className="col-md-8"
          label="Receipt"
          name="receipt"
          type="text"
          errors={errors.receipt}
          value={values.receipt}
          onChange={handleChange}
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