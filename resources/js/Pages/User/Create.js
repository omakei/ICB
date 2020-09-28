import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';

const Create =  ()=>{
    const { departments ,errors } = usePage();
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
      first_name:'',
      middle_name:'',
      last_name:'',
      mobile_number:'',
      department:'',
      email:'',
      board_registrations: [],
      education_certificaties:[],
      attachments:[]
   
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
      Inertia.post(route('units.store'), values).then(() => {
        setSending(false);
      });
    }

    return (
        <BlockCard title="Create Unit">
             
             <form onSubmit={handleSubmit}>
                <TextInput
                    className="col-md-8"
                    label="First Name"
                    name="first_name"
                    type="text"
                    errors={errors.first_name}
                    value={values.first_name}
                    onChange={handleChange}
                />
                <TextInput
                    className="col-md-8"
                    label="Middle Name"
                    name="middle_name"
                    type="text"
                    errors={errors.middle_name}
                    value={values.middle_name}
                    onChange={handleChange}
                />
                <TextInput
                    className="col-md-8"
                    label="Last Name"
                    name="last_name"
                    type="text"
                    errors={errors.last_name}
                    value={values.last_name}
                    onChange={handleChange}
                />
                <TextInput
                    className="col-md-8"
                    label="Mobile Number"
                    name="mobile_number"
                    type="text"
                    errors={errors.mobile_number}
                    value={values.mobile_number}
                    onChange={handleChange}
                />
                <TextInput
                    className="col-md-8"
                    label="Email"
                    name="email"
                    type="email"
                    errors={errors.email}
                    value={values.email}
                    onChange={handleChange}
                />
                  <SelectInput
                    className="col-md-8"
                    label="department"
                    name="department"
                    type="text"
                    errors={errors.is_academic}
                    value={values.is_academic}
                    onChange={handleChange}
                >
                  {departments.map((department)=>(
                    <option value={department.id}>{department.name}</option>
                  ))}
                
                </SelectInput>
                
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
Create.layout = page => <Layout children={page} />;

export default Create;