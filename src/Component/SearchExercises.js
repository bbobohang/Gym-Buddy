import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, options } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import database from '../data.json';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [searchField, setSearchField] = useState('');

	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = () => {
			const bodyPartsData = [
				'back',
				'cardio',
				'chest',
				'lower arms',
				'lower legs',
				'neck',
				'shoulders',
				'upper arms',
				'upper legs',
				'waist',
			];

			setBodyParts(['all', ...bodyPartsData]);
		};

		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (searchField) {
			const data = database;
			const searchedExercise = data.filter(
				(exe) =>
					exe.name.toLowerCase().includes(searchField) ||
					exe.target.toLowerCase().includes(searchField) ||
					exe.bodyPart.toLowerCase().includes(searchField) ||
					exe.equipment.toLowerCase().includes(searchField)
			);

			setSearchField('');
			setExercises(searchedExercise);
			console.log(searchedExercise);
			window.scrollTo({ top: 1400, behavior: 'smooth' });
		}
	};
	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography textAlign='center' fontWeight={700} fontSize='44px' mb='20px'>
				Awesome Exercises <br />
				You Should Know
			</Typography>
			<Box position='relative' mb='76px' backgroundColor='#fff'>
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '40px' },
						width: { lg: '1100px', xs: '200px' },
						backgroundColor: '#fff',
						borderRadius: '40px',
					}}
					height='76px'
					value={searchField}
					onChange={(e) => {
						setSearchField(e.target.value.toLowerCase());
					}}
					placeholder='Search an exercise'
					type='text'
				/>
				<Button
					variant='contained'
					color='error'
					position='absolute'
					sx={{ height: '56px', width: { lg: '100px', xs: '50px' } }}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					p: '20px',
				}}
			>
				<HorizontalScrollBar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
