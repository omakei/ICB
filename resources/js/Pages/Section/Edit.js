import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';

const Edit =  ()=>{
    const { parent,section, errors } = usePage();
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
      name: section.name || '',
      parent_id: parent.id,
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
      Inertia.put(route('sections.update', section.id), values).then(() => {
        setSending(false);
      });
    }

    return (
        <BlockCard title="Create Organization">
             
             <form onSubmit={handleSubmit}>
                <TextInput
                    className="col-md-8"
                    label="Organization Name"
                    name="name"
                    type="text"
                    errors={errors.name}
                    value={values.name}
                    onChange={handleChange}
                />
                <div class="form-group pl-20">
                    <LoadingButton
                        type="submit"
                        loading={sending}
                        className="btn btn-alt-primary"
                    >
                        <i class="si si-login mr-10"></i> Save Changes
                    </LoadingButton>
                </div>
            </form>

        </BlockCard>
    )
}
Edit.layout = page => <Layout children={page} />;

export default Edit;