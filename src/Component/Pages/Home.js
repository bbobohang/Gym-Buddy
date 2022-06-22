import React, { useState } from 'react';
import { Box } from '@mui/material';

import Banner from '../Banner';
import SearchExercises from '../SearchExercises';
import Exercises from '../Exercises';
const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState('all');

	return (
		<Box>
			<Banner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			{/* <Exercises
				setExercises={setExercises}
				exercises={exercises}
				bodyPart={bodyPart}
			/> */}
		</Box>
	);
};

export default Home;
