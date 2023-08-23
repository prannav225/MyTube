import {
  CheckCircle,
  Visibility,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import { Box, Stack, SvgIcon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const VideoDetails = () => {
  let [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
    fetchFromApi(
      `search?part=snippet&relatedToVideoId=${id}&commentThreads`
    ).then((data) => setComments(data.items));
  });
  if (!videoDetail?.snippet)
    return (
      <Typography
        color="#fff"
        variant="h3"
        display="flex
  "
        justifyContent="center"
        alignItems="center"
      >
        Loading...
      </Typography>
    );

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
    snippet: { topLevelComment, textDisplay, authorDisplayName },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box SX={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" color="#fff" fontWeight="bold" p="2px">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#ff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6", color: "#fff" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  color="#fff"
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <VisibilityIcon
                    sx={{ marginRight: "5px", color: "#FC1503" }}
                  />
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  color="#fff"
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ThumbUpIcon sx={{ marginRight: "5px", color: "#3498DB" }} />
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
            <Typography
              variant="body2"
              color={"#fff"}
              p={2}
              textAlign={"justify"}
            >
              {description}
            </Typography>
            {topLevelComment}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
