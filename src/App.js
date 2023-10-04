import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, SearchFeed, VideoDetails, ChannelDetails, Feed } from './components';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Box sx={{ backgroundColor: '#252525' }}>
          <Navbar />
          <Routes>
            <Route path='/MyTube/' element={<Feed />} />
            <Route path='MyTube/video/:id' element={<VideoDetails />} />
            <Route path='MyTube/channel/:id' element={<ChannelDetails />} />
            <Route path='MyTube/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
