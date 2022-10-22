import Container from '@mui/material/Container';
import * as React from 'react';

const Footer = () => (
  <Container
    maxWidth="xl"
    sx={{
      padding: 3,
      textAlign: 'center',
      bgcolor: '#333',
      color: '#ddd',
      fontWeight: '700',
    }}
  >
    © 2022 Geekified.net made in React app
  </Container>
);

export default Footer;
