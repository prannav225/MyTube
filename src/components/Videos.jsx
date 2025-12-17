import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from '../components';

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return (<Typography color='#fff' variant='h3' display='flex
    ' justifyContent='center' alignItems='center' >Loading...</Typography>)
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos