import { Stack, Typography, IconButton, useTheme, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { ColorModeContext } from '../utils/ColorModeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Stack
            direction="row"
            alignItems='center'
            px={2}
            py={1}
            sx={{ 
                position: 'sticky', 
                background: theme.palette.mode === 'dark' ? '#0f0f0f' : '#fff',
                top: 0, 
                justifyContent: 'space-between',
                zIndex: 999
            }} 
        >
            <Stack direction="row" alignItems="center" gap={1}>
                <IconButton sx={{ display: { xs: 'none', md: 'block' }, mr: 1, color: 'text.primary' }}>
                    <MenuIcon />
                </IconButton>
                <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" height={30} />
                    <Typography variant='h5' fontWeight="bold" sx={{ color: 'text.primary', ml: 1, letterSpacing: -1, fontFamily: 'Roboto Condensed' }}>
                        My<span style={{ color: '#FF0033' }}>Tube</span>
                    </Typography>
                </Link>
            </Stack>

            <SearchBar />

            <Box>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Stack>
    )
}

export default Navbar
