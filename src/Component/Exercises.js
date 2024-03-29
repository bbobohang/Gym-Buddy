import React, { useEffect, useState, Fragment } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchData, options } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import database from '../data.json';
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
				bodyPartData = database;
			} else {
				bodyPartData = database.filter((item) => item.bodyPart === bodyPart);
			}
			setExercises(bodyPartData);
		};
		fetchBodyPart();
	}, [bodyPart]);
	return (
		<Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
			<Typography variant='h3' mb='46px'>
				Showing Results ({exercises.length})
			</Typography>
			{exercises.length === 0 ? (
				<div>No exercise found! Try something else!</div>
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
