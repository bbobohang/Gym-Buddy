import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
const SimilarExercise = ({ equipmentExercise, targetMuscle }) => {
	return (
		<Box
			sx={{
				mt: { lg: '70px', xs: '0' },
				p: '20px',
			}}
		>
			<Typography variant='h5' mb='10px' fontWeight='bold'>
				Exercises that target the same muscle group
			</Typography>
			<Stack direction='row' sx={{ p: '2', position: 'relative', mb: '100px' }}>
				{targetMuscle.length && (
					<HorizontalScrollBar data={targetMuscle} isSimilar={true} />
				)}
			</Stack>
			<Typography variant='h5' mb='10px' fontWeight='bold'>
				Exercises that uses the same equipments
			</Typography>
			<Stack direction='row' sx={{ p: '2', position: 'relative' }}>
				{equipmentExercise.length && (
					<HorizontalScrollBar data={equipmentExercise} isSimilar={true} />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercise;
