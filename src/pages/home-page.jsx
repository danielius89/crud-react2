import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Box, Modal, Grid } from '@mui/material/';
import Header from '../components/header';
import NewsForm from '../components/news-form';
import NewsService from '../services/news-service';

const NewsPicture = {
  maxWidth: 'calc(100% + 16px)',
  margin: '-8px 0 0 -8px',

};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [news, setNews] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [newsBeingEdited, setNewsBeingEdited] = React.useState(null);

  // UX functions
  const closeModal = () => {
    setModalOpen(false);
    setNewsBeingEdited(null);
  };

  // Data manipulation functions
  const fetchAllNews = async () => {
    const fetchedNews = await NewsService.fetchAll();
    setNews(fetchedNews);
  };

  const createNews = async (newsProps) => {
    await NewsService.create(newsProps);
    await fetchAllNews();
    closeModal();
  };

  const editNews = (id) => {
    const foundNews = news.find((c) => c.id === id);
    setNewsBeingEdited(foundNews);
    setModalOpen(true);
  };

  const updateNews = async (newsProps) => {
    await NewsService.update(newsBeingEdited.id, newsProps);
    await fetchAllNews();
    closeModal();
  };

  const removeNews = async (id) => {
    await NewsService.remove(id);
    fetchAllNews();
  };

  React.useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Box sx={{ flexGrow: 1, paddingLeft: 2, paddingTop: 2 }}>
            <Grid container spacing={2}>
              <Grid item padding={2} xs={12} md={8} sx={{ bgcolor: '#eee' }}>

                <Item>Turinys</Item>
                <Grid container spacing={2} paddingTop={2}>

                  <Grid item xs={12} md={6} lg={6}>
                    <Item sx={{ textAlign: 'left' }}>
                      <img
                        src="https://geekified.net/wp-content/uploads/2019/07/stranger-things-eleven-papa-800x450.jpg"
                        alt="no alt"
                        style={NewsPicture}
                      />
                      <Typography variant="h4" component="h2" align="left" color="secondary" fontWeight="700" gutterBottom>
                        Naujienos pavadinimas
                      </Typography>
                      <Stack direction="row" spacing={1} paddingBottom={2}>
                        <Chip icon={<MovieIcon />} label="Filmai" />
                        <Chip icon={<NewspaperIcon />} label="Naujienos" />

                      </Stack>
                      <Typography align="left">
                        Mere hours before “Strangers Things” season 3 gets released,
                        Chris and Dan sat down to talk about the first two seasons of the series.
                        Chris: One of the first things that comes to mind, when
                        talking about “Stranger Things”
                        is the 80s nostalgia and how it was used to create the whole storyline.

                      </Typography>

                      <Box component="div" sx={{ display: 'inline' }}>autorius</Box>
                      <Box component="div" sx={{ display: 'inline' }}>inldatane</Box>
                      <Box component="div" sx={{ display: 'inline' }}>komentarai</Box>
                    </Item>
                  </Grid>
                </Grid>

              </Grid>
              <Grid item padding={2} xs={12} md={4} sx={{ bgcolor: '#ddd' }}>
                <Item>šoninė juosta</Item>
                <Header openModal={() => setModalOpen(true)} />
                <Modal open={modalOpen} onClose={closeModal}>
                  <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '400px',
                  }}
                  >
                    <NewsForm
                      onSubmit={newsBeingEdited ? updateNews : createNews}
                      formTitle={newsBeingEdited ? 'Edit news' : 'Create a post'}
                      submitText={newsBeingEdited ? 'Update news' : 'Send'}
                      color={newsBeingEdited ? 'primary' : 'primary'}
                      initValues={newsBeingEdited}
                    />
                  </Box>
                </Modal>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
