import React, { useEffect, useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginStyle } from '../../styles/views/Login/LoginStyle';

import LoginForm from '../../components/common/LoginForm/LoginForm';
import ModalComponent from '../../components/common/Modal/Modal';
import RegisterForm from '../../components/common/RegisterForm/RegisterForm';

const Login = () => {
	const [form, setForm] = useState('');

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const history = useHistory();

	const checkIfUserIsAuthRef: React.MutableRefObject<any> = useRef();

	const checkIfUserIsAuth = () => {

	};

	checkIfUserIsAuthRef.current = checkIfUserIsAuth;

	useEffect(() => {
		checkIfUserIsAuthRef?.current()?.catch(null);
	}, []);


	return (
		<div className={LoginStyle}>
			<div className="ctn-btn-login">
				<div className="btns">
					{/* <button
						onClick={() => {
							setForm('register');
							handleOpen();
						}}
						className="regístrate_button"
					>
						SIGN UP
					</button> */}
					<button
						onClick={() => {
							setForm('login');
							handleOpen();
						}}
						className="login_button"
					>
						LOG IN
					</button>
				</div>
			</div>
			<ModalComponent
				data={{
					open,
					handleClose,
					component:
						form === 'login' ? (
							<LoginForm setForm={setForm} />
						) : form === 'register' ? (
							<RegisterForm setForm={setForm} />
						) : (
							''
						),
					style: {
						bg: '#fff',
						color: '#fff',
					},
					width: '300px',
					height: '400px',
					maxWidth: '400px'
				}}
			/>
		</div>
	);
};

export default Login;
