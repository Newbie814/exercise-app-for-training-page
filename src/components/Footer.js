import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt='80px' bgcolor='#063251'>
    <Stack
      gap='40px'
      width='100vw'
      sx={{ alignItems: 'center' }}
      flexWrap='wrap'
      px='40px'
      pt='24px'
    >
      <img src={Logo} alt='logo' style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: '16px', xs: '12px' } }}
      mt='41px'
      textAlign='center'
      pb='40px'
    >
      All rights reserved
    </Typography>
  </Box>
);

export default Footer;
