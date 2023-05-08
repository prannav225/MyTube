import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  console.log(videoId, snippet);
  return (
    <Card sx={{ width: { xs: '100%', sm: '100%', md: '280px' }, boxShadow: 'none', backgroundColor: '#1e1e1e', borderRadius: '10px 10px 0px 0px ' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 180, width: { xs: '100%', sm: '100%' }, borderRadius: '0px 0px 10px 10px' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff' >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='grey' >
            {snippet?.channelTitle
              .slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: 'grey', ml: '5px' }} />
          </Typography>
          <Typography variant='caption' color='grey' >
            {snippet?.description.slice(0, 70)}
          </Typography>
        </Link>

      </CardContent>

    </Card>
  )
}

export default VideoCard