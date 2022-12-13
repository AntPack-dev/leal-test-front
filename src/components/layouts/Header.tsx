import { useState, useEffect } from 'react';
import { HashRouterProps, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import Switch from '@mui/material/Switch';



import { HeaderStyle } from '../../styles/components/layout/HeaderStyle';
import AuthContext from '../../context/auth';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Login from '../../views/Login';
import BuyForm from '../common/buyForm/buyForm';

interface headerProps {
	theme: boolean,
	setTheme: any
}

export function Header({ theme, setTheme }: headerProps) {


	return (
		<div
			className={HeaderStyle}
			style={{ backgroundColor: (theme ? 'rgb(255, 102, 0)' : '#7AC5BE') }}
		>
			<div className="header_contain">
				<div>
					<h2>Mode </h2>
					<Switch onChange={(e) => {
						if (e.target.checked) {
							console.log(e)
							setTheme(true)
						} else {
							setTheme(false)
						}
					}} defaultChecked color="warning" />
				</div>
				<Login />
			</div>
		</div>
	);
}

export default Header;
