import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { LoginFormStyle } from '../../../styles/components/common/LoginForm/LoginFormStyle';
import { SmallTitle, PrincipalInput, PrincipalButton } from '../../../styles/GlobalStyle';

const validate = (values: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 3) {
    errors.name = 'The name is too short';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'The Password is too short';
  }

  if (!values.email) {
    errors.email = 'The email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  return errors;
}

const RegisterForm = ({ setForm }: { setForm: any }) => {
  const history = useHistory();
  // const [ select, setSelect ] = useState('');
  const [countriesData, setCountriesData]: any = useState();
  const [operators, setOperators]: any = useState();
  const [chanels, setChanels]: any = useState();


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      partner: '',
      phoneNumber: '',
      ally: '',
      country: '',
      city: '',
      channel: '',
    },
    validate,
    onSubmit: (values: any) => {
      values.countries_id = values.country;
      values.operatorId = values.partner;
      values.chanelId = values.channel;
      values.role = 'agent';

      delete values.country;
      delete values.partner;
      delete values.channel;
      console.log(values);
      handleRegister(values);
    }
  });


  const handleRegister = async (values: any) => {

  }

  return (
    <>
      <form className={LoginFormStyle} onSubmit={formik.handleSubmit}>
        <div className='_logo'>

        </div>
        <h1 className={SmallTitle}>
          SIGN UP
        </h1>
        <div className='_form_content'>
          <input
            className={`${PrincipalInput} _upercase ${formik.errors.name ? 'border_error' : ''}`}
            type="text"
            placeholder='Name and surname'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}

          <input
            className={`${PrincipalInput} _upercase ${formik.errors.email ? 'border_error' : ''}`}
            type="email"
            placeholder='Email'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

          <input
            className={`${PrincipalInput} _upercase ${formik.errors.password ? 'border_error' : ''}`}
            type="password"
            placeholder='Password'
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

          <div className="_content_form_button">
            <button type='submit' className={`${PrincipalButton} _form_button`}>SIGN UP</button>
          </div>
          <p onClick={() => setForm('login')} className="to-register">Do you already have an account? Sign in here</p>
        </div>
      </form>
    </>
  )

}


export default RegisterForm;