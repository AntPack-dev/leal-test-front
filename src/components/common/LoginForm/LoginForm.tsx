import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from "react";

import { LoginFormStyle } from '../../../styles/components/common/LoginForm/LoginFormStyle';
import { SmallTitle, PrincipalInput, PrincipalButton } from '../../../styles/GlobalStyle';


const validate = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'The email is invalid';
  }

  if (!values.password) {
    errors.password = 'The password is required';
  } else if (values.password.length < 5) {
    errors.password = 'The password is too short';
  }

  return errors;
}

const handleLogin = (values: any) => {
  console.log(values.password)
}

const LoginForm = ({ setForm }: { setForm: any }) => {
  const history = useHistory();
  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values: any) => {
      handleLogin(values);
    }
  });

  return (
    <>
      <form className={LoginFormStyle} onSubmit={formik.handleSubmit}>
        <div className='_logo'>

        </div>
        <h1 className={SmallTitle}>
          LOG IN
        </h1>
        <div className='_form_content'>
          <input
            className={`${PrincipalInput} ${formik.errors.email ? 'border_error' : ''}`}
            type="email"
            placeholder='Email'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

          <input
            className={`${PrincipalInput} ${formik.errors.password ? 'border_error' : ''}`}
            type="password"
            placeholder='Password'
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

          {error ? <div className="error">{error}</div> : null}

          <div className="_content_form_button">
            <button className={`${PrincipalButton} _form_button`}>LOG IN</button>
          </div>
          <p onClick={() => setForm('register')} className="to-register">¿You do not have an account? Sign up here</p>
        </div>
      </form>
    </>
  )

}


export default LoginForm;