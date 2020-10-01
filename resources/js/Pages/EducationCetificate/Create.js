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

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.post(route('departments.store'), values).then(() => {
      setSending(false);
    });
  }

  return (
    <BlockCard title="Create Certificate">

      <form onSubmit={handleSubmit}>
        <TextInput
          className="col-md-8"
          label="Certificate Name"
          name="Certificate name"
          type="text"
          errors={errors.name}
          value={values.name}
          onChange={text => setName(text)}
        />
        <TextAreaInput
          className="col-md-8"
          label="Description"
          name="discription"
          type="text"
          errors={errors.is_academic}
          value={values.is_academic}
          onChange={text => setDescription(text)}>
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