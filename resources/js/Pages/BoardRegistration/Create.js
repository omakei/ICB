import React, { useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import TextAreaInput from '@/Shared/TextAreaInput'

const Create = () => {
  const { errors } = usePage();
  const [sending, setSending] = useState(false);

  const [values, setValues] = useState({
    board_name:  '',
    description: '',
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
    Inertia.post(route('boardregistrations.store'), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Create Board Registration Name">

      <form onSubmit={handleSubmit}>
        <TextInput
          className="col-md-8"
          label="Baord Registration Name"
          name="board_name"
          type="text"
          errors={errors.board_name}
          value={values.board_name}
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