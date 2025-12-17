import { IconButton, Paper, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    let [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    let handleSubmit = e => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }

    }

    const theme = useTheme();

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: '40px',
                border: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#d3d3d3'}`,
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                display: 'flex',
                alignItems: 'center',
                background: theme.palette.mode === 'dark' ? '#121212' : '#fff',
                width: { xs: '200px', md: '500px' },
                transition: 'all 0.3s ease',
                overflow: 'hidden'
            }}
        >
            <input
                className='search-bar'
                placeholder='Search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ background: 'transparent', color: theme.palette.text.primary,flex: 1, border: 'none', outline: 'none' }}
            />
            <IconButton type="submit" sx={{ 
                p: '10px', 
                color: theme.palette.text.primary, 
                bgcolor: theme.palette.mode === 'dark' ? '#222' : '#f8f8f8',
                width: '60px',
                borderRadius: '0 40px 40px 0',
                borderLeft: `1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#d3d3d3'}`,
                '&:hover': { bgcolor: theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0' }
            }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar