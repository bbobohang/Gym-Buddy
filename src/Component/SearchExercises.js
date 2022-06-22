import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, options } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
	const [searchField, setSearchField] = useState('');

	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				options
			);

			setBodyParts(['all', ...bodyPartsData]);
		};

		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (searchField) {
			const data = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				options
			);
			const searchedExercise = data.filter(
				(exe) =>
					exe.name.toLowerCase().includes(searchField) ||
					exe.target.toLowerCase().includes(searchField) ||
					exe.bodyPart.toLowerCase().includes(searchField) ||
					exe.equipment.toLowerCase().includes(searchField)
			);

			setSearchField('');
			setExercises(searchedExercise);
			window.scrollTo({ top: 1400, behavior: 'smooth' });
		}
	};
	return (
		<Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
			<Typography fontSize='44px' textAlign='center' fontWeight={700} mb='20px'>
				Awesome Exercises <br />
				You Should Know
			</Typography>
			<Box position='relative' mb='76px' backgroundColor='#fff'>
				<TextField
					sx={{
						input: { fontWeight: '700', border: 'none', borderRadius: '40px' },
						width: { lg: '1100px', xs: '350px' },
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
