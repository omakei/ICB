import React, {useState} from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '@/Shared/Layout';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'
import BlockCard from '@/Shared/BlockCard'
import { Inertia } from '@inertiajs/inertia';
import SelectInput from '@/Shared/SelectInput'
import MultiSelectInput from '@/Shared/MultiSelectInput'
import FileInput from '@/Shared/FileInput'
import Axios from 'axios';

const Create =  ()=>{
    const { departments, certificates ,roles,  boards, errors, titles } = usePage();
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
      first_name:'',
      middle_name:'',
      last_name:'',
      mobile_number:'',
      department:'',
      email:'',
      title:'',
      role: [],
      board_registrations: [],
      education_certificaties: [],
      image:''
   
    });
  
    function handleChange(e) {
      const key = e.target.name;
      const value = e.target.value;
      setValues(values => ({
        ...values,
        [key]: value
      }));
    }

    function handleMultiSelectChange(newValue, actionMeta) {
      const key = actionMeta.name;
      const value = newValue;
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

  //  function handleDepartmentChange(e)
  //  {
  //     setSending(true);
  //     axios.post(route('check-domain'), { department: value.department}).then((response) => {
  //       console.log(response.status);
  //       if(response.status === 208) {
  //         console.log(response.status);
  //         setSending(true);
  //         setSending(false);
  //       } else {
  //         setSending(false);
  //         setSending(true);
  //       }
  //     });
  //  }

    function handleSubmit(e) {
      e.preventDefault();
      setSending(true);
      Inertia.post(route('userdetails.store'), values).then(() => {
        setSending(false);
      });
    }

    return (
        <BlockCard title="Create User">
             
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
                    label="Department"
                    name="department"
                    type="text"
                    errors={errors.department}
                    value={values.department}
                    onChange={handleChange}
                >
                  <option selected>Select department</option>
                  {departments.map((department)=>(
                    <option value={department.id}>{department.name}</option>
                  ))}
                
                </SelectInput>

                <SelectInput
                    className="col-md-8"
                    label="Title"
                    name="title"
                    type="text"
                    errors={errors.title}
                    value={values.title}
                    onChange={handleChange}
                >
                  <option selected>Select Title</option>
                  {titles.map((title)=>(
                    <option value={title.value}>{title.option}</option>
                  ))}
                
                </SelectInput>
            
                <MultiSelectInput
                    className="col-md-8"
                    label="Board Registrations"
                    name="board_registrations"
                    options={boards}
                    errors={errors.board_registrations}
                    value={values.board_registrations}
                    onChange={handleMultiSelectChange}
                />
                <MultiSelectInput
                    className="col-md-8"
                    label="Education Certificates"
                    name="education_certificaties"
                    options={certificates}
                    errors={errors.education_certificaties}
                    value={values.education_certificaties}
                    onChange={handleMultiSelectChange}
                />
                <MultiSelectInput
                    className="col-md-8"
                    label="Role(s)"
                    name="role"
                    options={roles}
                    errors={errors.role}
                    value={values.role}
                    onChange={handleMultiSelectChange}
                />
                <FileInput
                  className="col-md-8 mb-4" 
                  id='profile-image'
                  name="image"
                  accept="image/*"
                  type="file"
                  errors={errors.image}
                  value={values.image}
                  label="Profile Image"
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
Create.layout = page => <Layout children={page} />;

export default Create;