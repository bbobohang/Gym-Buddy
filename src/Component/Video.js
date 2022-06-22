import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Video = ({ similarVideo, name }) => {
	return (
		<Box sx={{ marginTop: { lg: '200px', sx: '20px' }, p: '20px	' }}>
			<Typography variant='h5' mb='33px'>
				Watch{' '}
				<span
					style={{
						color: '#ff2625',
						textTransform: 'capitalize',
						textDecoration: 'bold',
					}}
				>
					{name}
				</span>{' '}
				exercise videos
			</Typography>
			<Stack
				justifyContent='flex-start'
				flexWrap='wrap'
				alignItems='center'
				sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0' } }}
			>
				{similarVideo?.slice(0, 3).map((item, index) => (
					<a
						key={index}
						className='exercise-video'
						href={`https://youtube.com/watch?v=${item.video.videoId}`}
						target='_blank'
						rel='noreferrer'
					>
						<img src={item.video.thumbnails[0].url} alt='' />
						<Box>
							<Typography variant='h7' color='#000'>
								{item.video.title}
							</Typography>
							<Typography variant='h6' color='#000'>
								{item.video.channelName}
							</Typography>
						</Box>
					</a>
				))}
			</Stack>
		</Box>
	);
};

export default Video;
