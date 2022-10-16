import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';

import Container from '@mui/material/Container';

import NewsCard from '../components/category-card';
import NewsService from '../services/news-service';

const hero = {
  /* backgroundImage: 'url("https://images.unsplash.com/photo-1597696929644-a2157a251a43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0% 50%',
  height: 'calc(100vh - 64px)', */
  backgroundColor: '#f4f4f4',
  paddingBottom: '1rem',
};

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

const TvSeriesCat = () => {
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
    <div style={hero}>
      <ThemeProvider theme={theme}>
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
              img,
              author,
              date,
            }) => (
            // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                {category === 'TV series' ? (
                  <NewsCard
                    id={id}
                    title={title}
                    description={description}
                    category={category}
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
      </ThemeProvider>
    </div>
  );
};

export default TvSeriesCat;
