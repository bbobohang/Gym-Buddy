import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/Logo(White).png';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
	const navigate = useNavigate();
	return (
		<Box mt='80px' bgcolor='black'>
			<Stack
				gap='40px'
				sx={{ alignItems: 'center' }}
				flexWrap='wrap'
				px='40px'
				pt='24px'
			>
				<img
					src={Logo}
					alt='logo'
					style={{ width: '150px', height: '150px', cursor: 'pointer' }}
					onClick={(e) => {
						e.preventDefault();
						navigate('/');
					}}
				/>
			</Stack>
			<Typography
				variant='h5'
				sx={{ fontSize: { lg: '20px', xs: '20px' } }}
				mt='41px'
				textAlign='center'
				color='white'
			>
				Made with ReactJS and MUI
			</Typography>
			<Typography
				variant='h5'
				sx={{ fontSize: { lg: '10px', xs: '10px' } }}
				textAlign='center'
				color='white'
				pb='40px'
			>
				Source code can be found <a href='#'>here</a>
			</Typography>
		</Box>
	);
};

export default Footer;
