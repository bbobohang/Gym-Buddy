import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Component/Pages/Home';
import ExerciseDetail from './Component/Pages/ExerciseDetail';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import ScrollToTop from '../src/utils/ScrollToTop';
import { useEffect } from 'react';
import { fetchData, options } from './utils/fetchData';
import Exercises from './Component/Exercises';

function App() {
	return (
		<Box>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/exercise/:id' element={<ExerciseDetail />} />
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
