import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsCard from '../components/category-card';
import NewsService from '../services/news-service';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

const GamesCat = () => {
  const [news, setNews] = React.useState([]);

  // UX functions

  // Data manipulation functions
  const fetchAllNews = async () => {
    const fetchedNews = await NewsService.fetchAll();
    setNews(fetchedNews);
  };

  React.useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <>
      <CssBaseline />

      <Typography variant="h1" align="center" pt="1vh" component="div" gutterBottom>
        Žaidimai
      </Typography>

      <Container maxWidth="xl">
        <Grid container spacing={2} paddingTop={2}>
          { news.map(({
            id,
            title,
            description,
            category,
            categoryId,
            img,
            author,
            date,
          }) => (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {categoryId === '3' ? (
                <NewsCard
                  id={id}
                  title={title}
                  description={description}
                  category={category}
                  categoryId={categoryId}
                  img={img}
                  author={author}
                  date={date}
                />
              )
                : ('')}
            </>
          ))}
        </Grid>

      </Container>
    </>
  );
};

export default GamesCat;
