import React, { useEffect, useState, Fragment } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchData, options } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, bodyPart, setExercises }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const exePerPage = 10;
	const lastExeIndex = currentPage * exePerPage;
	const firstExeIndex = lastExeIndex - exePerPage;

	const currentExercise = exercises.slice(firstExeIndex, lastExeIndex);

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: 1400, behavior: 'smooth' });
	};

	useEffect(() => {
		const fetchBodyPart = async () => {
			let bodyPartData = [];

			if (bodyPart === 'all') {
				bodyPartData = await fetchData(
					'https://exercisedb.p.rapidapi.com/exercises',
					options
				);
			} else {
				bodyPartData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					options
				);
			}
			setExercises(bodyPartData);
		};
		fetchBodyPart();
	}, [bodyPart]);
	return (
		<Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
			<Typography variant='h3' mb='46px'>
				Showing Results
			</Typography>
			{exercises.length === 0 ? (
				<div>Search for something</div>
			) : (
				<Fragment>
					<Stack
						direction='row'
						sx={{ gap: { lg: '107px', xs: '50px' } }}
						flexWrap='wrap'
						justifyContent='center'
					>
						{currentExercise.map((exercise, index) => (
							<ExerciseCard key={index} exercise={exercise} />
						))}
					</Stack>
					<Stack mt='100px' alignItems='center'>
						{exercises.length > 9 && (
							<Pagination
								color='standard'
								shape='rounded'
								count={Math.ceil(exercises.length / exePerPage)}
								page={currentPage}
								onChange={paginate}
							/>
						)}
					</Stack>
				</Fragment>
			)}
		</Box>
	);
};

export default Exercises;
