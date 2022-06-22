import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
const SimilarExercise = ({ equipmentExercise, targetMuscle }) => {
	return (
		<Box sx={{ mt: { lg: '70px', xs: '0' }, p: '20px	' }}>
			<Typography variant='h5' mb='10px'>
				Exercises that target the same muscle group
			</Typography>
			<Stack direction='row' sx={{ p: '2', position: 'relative' }}>
				{targetMuscle.length && (
					<HorizontalScrollBar data={targetMuscle} isSimilar={true} />
				)}
			</Stack>
		</Box>
	);
};

export default SimilarExercise;
