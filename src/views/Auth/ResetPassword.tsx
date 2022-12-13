import { useFormik } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useContext, useState } from "react";
import { ResetPaswordStyle } from '../../styles/views/Auth/ResetPaswordStyle';
import { SmallTitle, PrincipalInput, PrincipalButton, Color } from '../../styles/GlobalStyle';
import AuthContext from '../../context/auth/index';

const validate = (values: any) => {
  const errors: any = {};

  if (!values.password1) {
    errors.password1 = 'The password is required';
  } else if (values.password1.length < 5) {
    errors.password1 = 'The password is too short';
  }

  if (!values.password2) {
    errors.password2 = 'The password is required';
  } else if (values.password2.length < 5) {
    errors.password2 = 'The password is too short';
  }

  if (values.password1 !== values.password2) {
    errors.password2 = 'The two passwords must match';
  }

  return errors;
}

const ResetPassword = () => {
  const { search }: { search: any } = useLocation();
  const history = useHistory();
  const valuesQuery: any = queryString.parse(search)
  const { onUpdatePassword } = useContext<any>(AuthContext);

  const [error, setError] = useState('')

  const formik = useFormik({
    initialValues: {
      password1: '',
      password2: '',
    },
    validate,
    onSubmit: (values: any) => {
      console.log({ values })
      values.password = values.password1;
      handleUpdatePassword(values);
    }
  });

  const handleUpdatePassword = async (values: any) => {
    const { password } = values;
    try {
      await onUpdatePassword(password, history, valuesQuery.token);
    } catch (e) {
      console.log('error', e);
      setError(`Error: ${e}`)
    }
  }

  return (
    <div className={ResetPaswordStyle}>
      <div className='_content_brands'>
        <img className='_brands'
          src="https://hbo-ventas.s3.us-east-2.amazonaws.com/utils/brands.webp"
        />
      </div>
      <div className='_Reset-form'>
        <form onSubmit={formik.handleSubmit}>
          <h1 className={`${SmallTitle}`} style={{ color: Color.white }} >
            Recover password
          </h1>
          <div className='_form_content'>
            <input
              className={`${PrincipalInput} ${formik.errors.password1 ? 'border_error' : ''}`}
              type="password"
              placeholder='Nueva contraseña'
              {...formik.getFieldProps('password1')}
            />
            {formik.touched.password1 && formik.errors.password1 ? <div className="error">{formik.errors.password1}</div> : null}

            <input
              className={`${PrincipalInput} ${formik.errors.password2 ? 'border_error' : ''}`}
              type="password"
              placeholder='Confirma tu nueva contraseña'
              {...formik.getFieldProps('password2')}
            />
            {formik.touched.password2 && formik.errors.password2 ? <div className="error">{formik.errors.password2}</div> : null}
            {error ? <div className="error">{error}</div> : null}
            <div className="_content_form_button">
              <button className={`${PrincipalButton} _form_button`}>log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword