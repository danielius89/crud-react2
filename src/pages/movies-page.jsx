import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsCard from '../components/category-card';
import NewsService from '../services/news-service';

const theme = createTheme();

const MoviesCat = () => {
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
        Filmai
      </Typography>

      <Container maxWidth="xl">
        <Grid container spacing={2} paddingTop={2}>
          { news.map(({
            id,
            title,
            description,
            categoryId,
            img,
            author,
            date,
          }) => (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {categoryId === '2' ? (
                <NewsCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
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

export default MoviesCat;
