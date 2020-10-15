import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import TextAreaInput from '@/Shared/TextAreaInput'
import FileInput from '@/Shared/FileInput'

const Edit =  ()=>{
  const {client, errors } = usePage();
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState({
    name: client.name ||'',
    address: client.address || '',
    contact:client.contact || '',
    description: client.description || '',
    fax: client.fax || '',
    website: client.website || '',
    email: client.email || '',
    image: ''
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [key]: value
    }));
  }

  function handleImage(file) {
     let photo = ''
      var reader = new FileReader();
      reader.onloadend = function() {
          console.log('RESULT', reader.result)
          setValues(values => ({
              ...values,
              image: reader.result
          }))
      }
      reader.readAsDataURL(file)
     
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    Inertia.put(route('clients.update', client.id), values).then(() => {
      setSending(false);
    });
  }

  return (
      <BlockCard title="Create Client">
           
           <form onSubmit={handleSubmit}>
              <TextInput
                  className="col-md-8"
                  label="Client Name"
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
                  {values.description}
              </TextAreaInput>
              <TextInput
                  className="col-md-8"
                  label="Client Address"
                  name="address"
                  type="text"
                  errors={errors.address}
                  value={values.address}
                  onChange={handleChange}
              />
              <TextInput
                  className="col-md-8"
                  label="Client Contact"
                  name="contact"
                  type="text"
                  errors={errors.contact}
                  value={values.contact}
                  onChange={handleChange}
              />
              <TextInput
                  className="col-md-8"
                  label="Client Email"
                  name="email"
                  type="email"
                  errors={errors.email}
                  value={values.email}
                  onChange={handleChange}
              />
              <TextInput
                  className="col-md-8"
                  label="Client Fax"
                  name="fax"
                  type="text"
                  errors={errors.fax}
                  value={values.fax}
                  onChange={handleChange}
              />
              <TextInput
                  className="col-md-8"
                  label="Client Website"
                  name="website"
                  type="text"
                  errors={errors.website}
                  value={values.website}
                  onChange={handleChange}
              />
              <FileInput
              className="col-md-8 mb-4" 
              id='client-image'
              name="image"
              accept="image/*"
              type="file"
              errors={errors.image}
              value={values.image}
              label="Client Image"
              onChange={handleImage}
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