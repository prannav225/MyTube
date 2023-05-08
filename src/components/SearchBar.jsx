import { IconButton, Paper } from '@mui/material'
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

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ borderRadius: 20, border: '1px solid e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 }, display:'flex', justifyContent:'space-between'}}
        >
            <input type="text" className='search-bar' placeholder='Search here...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <IconButton>
                <Search type="submit" sx={{ p: '2px', color: 'red', }} />
            </IconButton>
        </Paper >
    )
}

export default SearchBar