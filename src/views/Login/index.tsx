import React, { useEffect, useRef, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../context/auth';
import { LoginStyle } from '../../styles/views/Login/LoginStyle';

import LoginForm from '../../components/common/LoginForm/LoginForm';
import ModalComponent from '../../components/common/Modal/Modal';
import RegisterForm from '../../components/common/RegisterForm/RegisterForm';

const Login = () => {
	const [form, setForm] = useState('');

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [isLoading, setIsLoading] = useState(true);

	const history = useHistory();
	const { isAuthenticated }: any = useContext(AuthContext);

	const checkIfUserIsAuthRef: React.MutableRefObject<any> = useRef();

	const checkIfUserIsAuth = () => {
		// Si esta autenticado
		if (isAuthenticated()) history.push('/home');
		else setIsLoading(false);
	};

	checkIfUserIsAuthRef.current = checkIfUserIsAuth;

	useEffect(() => {
		checkIfUserIsAuthRef?.current()?.catch(null);
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className={LoginStyle}>
			<div className="ctn-btn-login">
				<div className="btns">
					<button
						onClick={() => {
							setForm('register');
							handleOpen();
						}}
						className="regístrate_button"
					>
						SIGN UP
					</button>
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
