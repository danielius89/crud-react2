import React from 'react';
import {
  Paper,
  Button,
  Typography,
} from '@mui/material';

const Header = ({ openModal }) => (
  <Paper sx={{ mb: 2, p: 2, bgcolor: 'common.white' }}>
    <Typography variant="h6" sx={{ mb: 1 }}>Admin tools</Typography>
    <Button variant="contained" color="primary" onClick={openModal}>Add news to the site</Button>
  </Paper>
);

export default Header;
