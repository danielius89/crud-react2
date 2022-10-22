import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import NewsCard from '../components/category-card';
import NewsService from '../services/news-service';

const GamesCat = () => {
  const [news, setNews] = React.useState([]);

  // UX functions
  const HeroSectionWrapper = styled(Container)(() => ({
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingTop: '15vw',
    paddingBottom: '15vw',
    position: 'relative',

  }));
  const HeroSection = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ddd',
    backgroundImage: 'url(games2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '-1',
    // opacity: '.5',
  }));
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

      <HeroSectionWrapper maxWidth="false">
        <Typography variant="h1" component="h1" align="center" pt="1vh" gutterBottom>
          Žaidimai
        </Typography>
        <HeroSection maxWidth="false" />
      </HeroSectionWrapper>

      <Container maxWidth="xl" sx={{ padding: 2, bgcolor: '#eee' }}>
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
