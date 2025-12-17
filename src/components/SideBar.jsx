import { Stack, useTheme } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants';


const SideBar = ({selectedCategory, setSelectedCategory}) => {
  const theme = useTheme();

  return (
    <Stack
      direction='row'
      sx={{
        overflowX: 'auto',
        height: 'auto',
        pb: 1,
        '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn' 
          onClick={()=>setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory 
                ? (theme.palette.mode === 'dark' ? '#fff' : '#000') 
                : (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'),
            color: category.name === selectedCategory 
                ? (theme.palette.mode === 'dark' ? '#000' : '#fff') 
                : theme.palette.text.primary,
            borderRadius: '8px', 
            fontWeight: '500',
            fontSize: '14px',
            border: 'none',
            padding: '6px 12px',
            marginRight: '12px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center'
          }}
          key={category.name}
        >
          <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center', opacity: 0.8 }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar