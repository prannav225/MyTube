import { CheckCircle } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardMedia, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(videoId, snippet);
  return (
    <Card sx={{ width: { xs: '100%', sm: '100%', md: '300px' }, boxShadow: 'none', borderRadius: 0, bgcolor: 'transparent' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: '100%', height: 180, borderRadius: '12px', objectFit: 'cover' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", height: '106px', p: "12px 0px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Stack direction="row" gap={2}>
                 <Avatar sx={{ bgcolor: 'grey.500', width: 36, height: 36 }} />
                 <Box>
                    <Typography variant='subtitle1' fontWeight='bold' color='text.primary' lineHeight={1.2}>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                    <Link to={snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant='subtitle2' color='text.secondary' mt={0.5} display="flex" alignItems="center">
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: 'text.secondary', ml: '5px' }} />
                        </Typography>
                    </Link>
                 </Box>
            </Stack>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard