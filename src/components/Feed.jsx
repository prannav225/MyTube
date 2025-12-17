import { Box, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SideBar, Videos } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';


const LeftRailItem = ({ icon, label }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' }, borderRadius: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 24, mb: 0.5, color: 'text.primary' } })}
        <Typography variant="caption" sx={{ fontSize: '10px', color: 'text.primary' }}>{label}</Typography>
    </Box>
)

const Feed = () => {
    let [selectedCategory, setSelectedCategory] = useState('New')
    let [videos, setVideos] = useState([]);
    const theme = useTheme();


    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack direction="row" spacing={0} sx={{ height: 'calc(100vh - 78px)' }}>
            {/* Left Rail (Desktop Only) */}
            <Box sx={{ 
                width: '72px', 
                display: { xs: 'none', md: 'block' }, 
                px: 0.5,
                height: '100%',
                overflowY: 'hidden'
            }}>
                <LeftRailItem icon={<HomeIcon />} label="Home" />
                <LeftRailItem icon={<SlowMotionVideoIcon />} label="Shorts" />
                <LeftRailItem icon={<SubscriptionsIcon />} label="Subscri..." />
                <LeftRailItem icon={<HistoryIcon />} label="History" />
            </Box>

            {/* Main Content */}
            <Box px={2} sx={{ overflowY: 'auto', height: '100%', flex: 1 }}>
                
                {/* Top Filter Chips */}
                <Box sx={{ position: 'sticky', top: 0, zIndex: 10, pb: 2, pt: 1.5, bgcolor: 'background.default' }}>
                    <SideBar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </Box>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed