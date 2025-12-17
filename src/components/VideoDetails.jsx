import {
  CheckCircle,
  Visibility,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { Box, Stack, SvgIcon, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const { id } = useParams();
  const theme = useTheme();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet)
    return (
      <Box minHeight="95vh" display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    );

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  const glassColor = theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <Box minHeight="95vh" sx={{ p: 2 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px", borderRadius: 3, overflow: 'hidden' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="50vh"
              style={{ borderRadius: '12px', overflow: 'hidden' }}
            />
            <Typography variant="h5" fontWeight="bold" p={2} sx={{ color: "text.primary" }}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "text.secondary" }}
              px={2}
              pb={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <Typography variant="h6" color="text.primary" fontWeight="bold">
                    {channelTitle}
                  </Typography>
                  <CheckCircle sx={{ fontSize: "14px", color: "gray" }} />
                </Stack>
              </Link>
              <Stack direction="row" gap={3} alignItems="center">
                <Box display="flex" alignItems="center" bgcolor={glassColor} px={2} py={1} borderRadius={4}>
                  <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500, color: 'text.primary' }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" bgcolor={glassColor} px={2} py={1} borderRadius={4} gap={1}>
                  <ThumbUpIcon sx={{ color: "text.primary", fontSize: 20 }} />
                  <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500, color: 'text.primary' }}>
                    {parseInt(likeCount).toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            
            <Box 
                sx={{ 
                    bgcolor: glassColor,
                    borderRadius: '12px', 
                    p: 2, 
                    mt: 1,
                    cursor: 'pointer',
                    '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)' }
                }}
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
            >
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom color="text.primary">
                    Description
                </Typography>
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                        whiteSpace: 'pre-line',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: isDescriptionExpanded ? 'unset' : 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {description}
                </Typography>
                <Typography variant="caption" fontWeight="bold" sx={{ mt: 1, display: 'block', color: 'text.primary' }}>
                    {isDescriptionExpanded ? 'Show less' : 'Show more'}
                </Typography>
            </Box>
          </Box>
        </Box>
        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
