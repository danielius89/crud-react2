import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsCard from '../components/category-card';
import NewsService from '../services/news-service';

const TvSeriesCat = () => {
  const theme = createTheme();
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
        Serialai
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
              {categoryId === '1' ? (
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

export default TvSeriesCat;
