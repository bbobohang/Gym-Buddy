import React from 'react';
import { Stack, Box, Typography, Button } from '@mui/material';

import BodyPartImage from '../assets/body-part.png';
import EquipmentImage from '../assets/equipment.png';
import TargetImage from '../assets/target.png';

const Detail = ({
	exercise: { gifUrl, bodyPart, equipment, id, name, target },
}) => {
	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
		{
			icon: TargetImage,
			name: target,
		},
	];
	return (
		<Stack
			gap='60px'
			sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
		>
			<img src={gifUrl} loading='lazy' className='detail-image' />
			<Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
				<Typography
					sx={{ fontSize: { lg: '32px', xs: '30px' } }}
					fontWeight={700}
					textTransform='capitalize'
				>
					{name}
				</Typography>
				<Typography variant='h6'>
					{' '}
					Exercises keep you strong.
					<br />
					<span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the
					best <br /> exercises to target your {target}. It will help you improve{' '}
					<br />
					your mood and gain energy.
				</Typography>

				{extraDetail.map((item, index) => (
					<Stack key={index} direction='row' gap='24px' alignItem='center'>
						<Button
							sx={{
								background: '#fff2db',
								borderRadius: '50%',
								width: '70px',
								height: '70px',
								'&:hover': {
									backgroundColor: '#fff2db',
								},
							}}
						>
							<img src={item.icon} className='detail-icon' />
						</Button>
						<Typography
							variant='h6'
							justifyContent='center'
							textTransform='capitalize'
							sx={{ pt: '20px' }}
						>
							{item.name}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Detail;
