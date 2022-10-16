import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MovieIcon from '@mui/icons-material/Movie';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const CategoryCard = ({
  title,
  description,
  category,
  img,
  author,
  date,
}) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const NewsPicture = {
    maxWidth: 'calc(100% + 16px)',
    margin: '-8px 0 0 -8px',
  };

  return (

    <Grid item xs={12} md={6} lg={4}>
      <Item sx={{ textAlign: 'left' }}>
        <img
          src={img}
          alt="no alt"
          style={NewsPicture}
        />
        <Typography variant="h4" component="h2" align="left" color="secondary" fontWeight="700" gutterBottom>
          {title}
        </Typography>

        <Stack direction="row" spacing={1} paddingBottom={2}>
          {category === 'Games' ? (
            <Chip icon={<VideogameAssetIcon />} label="Games" />
          )
            : ('')}

          {category === 'Movies' ? (
            <Chip icon={<MovieIcon />} label="Movies" />
          )
            : ('')}

          {category === 'TV series' ? (
            <Chip icon={<LiveTvIcon />} label="TV series" />
          )
            : ('')}
        </Stack>

        <Typography align="left">
          {description}
        </Typography>

        <Box component="div" sx={{ display: 'inline', marginRight: '15px', fontWeight: '700' }}>{author}</Box>

        <Box
          component="div"
          sx={{
            display: 'inline',
            marginRight: '15px',
            fontWeight: '400',
            fontStyle: 'italic',
          }}
        >
          {date}
        </Box>
      </Item>
    </Grid>
  );
};

export default CategoryCard;
