import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Switch from '@mui/material/Switch';



import { HeaderStyle } from '../../styles/components/layout/HeaderStyle';
import AuthContext from '../../context/auth';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Login from '../../views/Login';
import BuyForm from '../common/buyForm/buyForm';

export function Header() {
	const { onLogout }: any = useContext(AuthContext);
	const history = useHistory();

	const [user, setUser] = useState<any>(null);
	const [active, setActive] = useState<any>(false);
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		let token: any = localStorage.getItem('@admin-data');

		if (token) {
			let payloadToken = JSON.parse(token);
			if (payloadToken.name) {
				setUser(payloadToken.name.split(' ')[0]);
			}
		}
	}, []);

	return (
		<div
			className={HeaderStyle}
		>
			<div className="header_contain">
				<div>
					<h2>Mode </h2>
					<Switch defaultChecked color="warning" />
				</div>
				<Login />
			</div>
		</div>
	);
}

export default Header;
