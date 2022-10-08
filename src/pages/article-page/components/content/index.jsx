import { Box, Divider } from '@mui/material';
import React from 'react';
import { InfoSection } from './components';

const Content = ({ article }) => (
  <Box>
    <InfoSection article={article} />
    <Divider />
  </Box>
);

export default Content;
