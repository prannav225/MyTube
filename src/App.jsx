import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, SearchFeed, VideoDetails, ChannelDetails, Feed } from './components';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetails />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
