import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import { Rectangle } from 'components';
import CategoryIcon from '@mui/icons-material/Category';
import HexagonIcon from '@mui/icons-material/Hexagon';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Swiper from './swiper';

const InfoSection = ({ article }) => (
  <Box>

    <Swiper images={article.images} />

    <Typography variant="h4" sx={{ mb: 1 }}>{article.title}</Typography>
    <Typography variant="h5" color="primary" sx={{ mb: 2 }}>{`${article.price}${article.currency}`}</Typography>
    <Typography variant="body1">{article.description}</Typography>
    <List>
      {[
        { text: article.category.label, Icon: CategoryIcon },
        { text: article.materialType.label, Icon: HexagonIcon },
        { text: article.color.label, Icon: ColorLensIcon },
      ].map(({ text, Icon }) => (
        <ListItem key={text}>
          <ListItemIcon><Icon /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>

);

export default InfoSection;
