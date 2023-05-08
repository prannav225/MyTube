import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SideBar, Videos } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {
  let [selectedCategory, setSelectedCategory] = useState('New')
  let [videos, setVideos] = useState([]);


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }} >
          Copyright © 2023 MyTube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff' }} >
          {selectedCategory} <span style={{ color: '#FC1503' }}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed