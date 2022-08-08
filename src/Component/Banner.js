import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import banner from '../assets/banner.png';
const Banner = () => {
	return (
		<Box
			sx={{
				mt: { lg: '70px', xs: '70px' },
				ml: { sm: '50px' },
			}}
			position='relative'
			p='10px'
		>
			<Typography color='#FF2625' fontWeight='600' fontSize='26px' mt='0px'>
				Gym Buddy
			</Typography>
			<Typography mb='23px' mt='30px' fontWeight='700' fontSize='26px'>
				Learn the perfect exercises <br /> for your workout
			</Typography>
			<Typography fontSize='20px' lineHeight='35px' mb='3px'>
				Check out the most effective exercises
			</Typography>
			<Button variant='contained' color='error' href='#exercises'>
				Explore exercises
			</Button>
			<Typography
				align='top'
				fontWeight={600}
				color='#FF2625'
				sx={{
					opacity: '0.1',
					display: { lg: 'block', xs: 'none' },
					fontSize: '150px',
				}}
			>
				Exercise
			</Typography>
			<img src={banner} className='hero-banner-img' />
		</Box>
	);
};

export default Banner;
