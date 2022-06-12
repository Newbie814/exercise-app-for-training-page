import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px='20px'
    >
      <Link to='/'>
        <img
          src={Logo}
          alt='logo for Woodard Training'
          style={{ width: '150px', height: 'auto', margin: '0px 20px' }}
        />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontFamily='Alegreya'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#102a42',
            borderBottom: '3px solid #bb2525',
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{ textDecoration: 'none', color: '#102a42' }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
