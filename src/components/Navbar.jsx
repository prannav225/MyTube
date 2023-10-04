import React from 'react'
import { Stack, Typography, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems='center'
            p={2}
            sx={{ position: 'sticky', background: 'black', top: 0, justifyContent: 'space-between', height: '40px', }} >
            <Link to='/MyTube/' style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                <img src={logo} alt="Logo" height={40} />
                <Typography variant='h6' style={{ color: '#fff', paddingLeft: '10px', margin: 'auto' }} >
                    My
                    <span style={{ color: 'red' }}>
                        Tube
                    </span>
                </Typography>
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar
