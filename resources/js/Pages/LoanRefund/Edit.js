import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import TextAreaInput from '@/Shared/TextAreaInput'
import DatePeakerInput from '@/Shared/DatePeakerInput'

const Edit =  ()=>{
  const {loan, refund, errors } = usePage();
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    amount:  refund.amount || '',
    description: refund.description || '',
    returned_date: refund. returned_date || '',
    loan_id: loan.id || ''
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
      returned_date: value
    }));

  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('loan_refunds.update', refund.id), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Edit loan refund">

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
          label="Returned Date"
          name="returned_date"
          type="text"
          errors={errors.returned_date}
          value={values.returned_date}
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
Edit.layout = page => <Layout children={page} />;

export default Edit;