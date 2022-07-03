import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, options, youtubeOptions } from '../../utils/fetchData';
import Detail from '../Detail';
import Video from '../Video';
import SimilarExercise from '../SimilarExercise';
import database from '../../data.json';

const ExerciseDetail = () => {
	const [exerciseDetail, setexerciseDetail] = useState({});
	const [similarVideo, setSimilarVideo] = useState({});
	const [targetMuscle, settargertMuscle] = useState([]);
	const [equipmentExercise, setequipmentExercise] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchDetail = () => {
			// const youtubeDBUrl = 'https://youtube-search-and-download.p.rapidapi.com';
			// const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com/exercises/exercise';
			// const exerciseDB = await fetchData(`${exerciseDBUrl}/${id}`, options);
			const exerciseDB = database.filter((item) => item.id === id);
			const targetMuscleDB = database.filter(
				(item) => item.bodyPart === exerciseDB[0].bodyPart
			);
			const targetEquipmentDB = database.filter(
				(item) => item.equipment === exerciseDB[0].equipment
			);

			// const youtubeDB = await fetchData(
			// 	`${youtubeDBUrl}/search?query=${exerciseDB.name}`,
			// 	youtubeOptions
			// );

			// const targetMuscleDB = await fetchData(
			// 	`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDB.target}`,
			// 	options
			// );

			// const targetEquipmentDB = await fetchData(
			// 	`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDB.equipment}`,
			// 	options
			// );

			setexerciseDetail(exerciseDB[0]);
			// setSimilarVideo(youtubeDB);
			settargertMuscle(targetMuscleDB);
			setequipmentExercise(targetEquipmentDB);
		};
		fetchDetail();
		console.log('selected');
		console.log(exerciseDetail);
		console.log('je');
		console.log(targetMuscle);
	}, [id]);

	return (
		<Box>
			<Detail exercise={exerciseDetail} />
			{/* <Video similarVideo={similarVideo.contents} name={exerciseDetail.name} /> */}
			<SimilarExercise
				targetMuscle={targetMuscle}
				equipmentExercise={equipmentExercise}
			/>
		</Box>
	);
};

export default ExerciseDetail;
