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
import { Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({
  id,
  title,
  description,
  categoryId,
  img,
  author,
  date,
}) => {
  const navigate = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const NewsPictureBox = {
    paddingBottom: '70%',
    backgroundImage: `url(${img})`,
    width: 'calc(100% + 16px)',
    margin: '-8px 0 0 -8px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  };

  return (

    <Grid item xs={12} md={6} lg={4}>
      <Item sx={{
        textAlign: 'left',
      }}
      >
        <div style={NewsPictureBox}> </div>
        <Typography variant="h5" component="h2" align="left" paddingTop={2} color="primary" fontWeight="700" gutterBottom>
          {title}
        </Typography>

        <Stack direction="row" spacing={1} paddingBottom={2}>

          {categoryId === '3' ? (
            <Chip icon={<VideogameAssetIcon />} label="Games" />
          )
            : ('')}

          {categoryId === '2' ? (
            <Chip icon={<MovieIcon />} label="Movies" />
          )
            : ('')}

          {categoryId === '1' ? (
            <Chip icon={<LiveTvIcon />} label="TV series" />
          )
            : ('')}
        </Stack>

        <Typography
          align="left"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '5',
            lineClamp: '5',
            WebkitBoxOrient: 'vertical',

          }}
        >

          {description}
        </Typography>
        <Divider light sx={{ marginBottom: '16px', marginTop: '16px' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
            marginBottom: 1,
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'inline',
              marginRight: '15px',
              fontWeight: '700',
            }}
          >
            {author}

          </Box>

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
        </Box>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          fullWidth
          sx={{ mt: 1, fontWeight: '700' }}
          onClick={() => navigate(`/article/${id}`)}
        >
          Per??i??r??ti
        </Button>

      </Item>
    </Grid>
  );
};

export default CategoryCard;
