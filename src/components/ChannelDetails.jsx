import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Gradient } from '@mui/icons-material'
const ChannelDetails = () => {

  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box  >
        <div style={{  background: 'linear-gradient( #8e0e00, #1f1c18)', height: '300px', zIndex: 10, display: 'flex', justifyContent: 'space-between' }} >
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-93px' />

      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetails