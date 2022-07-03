import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import Banner from '../Banner';
import SearchExercises from '../SearchExercises';
import Exercises from '../Exercises';
import data from '../../data.json';

const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState('all');
	useEffect(() => {
		setExercises(data);
	}, []);
	return (
		<Box>
			<Banner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				exercises={exercises}
				bodyPart={bodyPart}
			/>
		</Box>
	);
};

export default Home;
