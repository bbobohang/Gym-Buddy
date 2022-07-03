import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Typography, Box } from '@mui/material';
const ExerciseCard = ({ exercise }) => {
	return (
		<Link
			to={`/exercise/${exercise.id}`}
			className='exercise-card'
			style={{ textDecoration: 'none' }}
		>
			<Box
				sx={{
					maxHeight: '300px',
					maxWidth: '300px',
					minHeight: '300px',
					minWidth: '300px',
					display: 'flex',
				}}
			>
				<img
					src={exercise.gifUrl}
					alt={exercise.name}
					loading='lazy'
					style={{ maxWidth: '100%', maxHeight: '100%' }}
				/>
			</Box>
			<Stack direction='row' sx={{ width: '20px', height: '20px' }}>
				<Button
					style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
					sx={{
						ml: '21px',
						color: '#fff',
						background: '#ffa9a9',
						borderRadius: '20px',
						fontSize: '12px',
						textTransform: 'capitalize',
						maxWidth: '100px',
						maxHeight: '40px',
						minWidth: '100px',
						minHeight: '40px',
						'&:hover': {
							backgroundColor: '#ffa9a9',
						},
					}}
				>
					{exercise.bodyPart}
				</Button>
				<Button
					sx={{
						ml: '21px',
						color: '#fff',
						background: '#ffc757',
						borderRadius: '20px',
						fontSize: '12px',
						textTransform: 'capitalize',
						maxWidth: '100px',
						maxHeight: '40px',
						minWidth: '100px',
						minHeight: '40px',
						'&:hover': {
							backgroundColor: '#ffc757',
						},
					}}
				>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				mt='60px'
				ml='21px'
				color='#000'
				pb='10px'
				textTransform='capitalize'
				fontSize='22px'
				fontWeight='bold'
				pr='10px'
			>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;
