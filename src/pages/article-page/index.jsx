import React from 'react';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import {
  Box, Alert, Divider, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import MovieIcon from '@mui/icons-material/Movie';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Stack from '@mui/material/Stack';
import ArticleService from '../../services/news-service';

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedArticle = await ArticleService.fetchById(articleId);
        setArticle(fetchedArticle);
      } catch (error) {
        setErrorMsg(`Nerastas produktas pagal id: '${articleId}'`);
      }
    })();
  }, [articleId]);
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Box sx={{ mt: 4, mx: 4 }}>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {article && (
      <Box>
        <Box>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 1200,
              flexGrow: 1,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ maxWidth: 400, maxHeight: 400 }}>
                  <Img alt="complex" src={article.img} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} lg container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h4" sx={{ mb: 1 }}>{article.title}</Typography>
                    <Stack direction="row" spacing={1} paddingBottom={2}>

                      {article.categoryId === '3' ? (
                        <Chip icon={<VideogameAssetIcon />} label="Games" />
                      )
                        : ('')}

                      {article.categoryId === '2' ? (
                        <Chip icon={<MovieIcon />} label="Movies" />
                      )
                        : ('')}

                      {article.categoryId === '1' ? (
                        <Chip icon={<LiveTvIcon />} label="TV series" />
                      )
                        : ('')}
                    </Stack>
                    <Divider sx={{ marginBottom: 2 }} />

                    <Typography variant="body1">{article.description}</Typography>
                  </Grid>
                  <Grid item>
                    <Divider sx={{ marginBottom: 2 }} />
                    <Box component="div" sx={{ display: 'inline', marginRight: '15px', fontWeight: '700' }}>{article.author}</Box>
                    <Box
                      component="div"
                      sx={{
                        display: 'inline',
                        marginRight: '15px',
                        fontWeight: '400',
                        fontStyle: 'italic',
                      }}
                    >
                      {article.date}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>

        </Box>

      </Box>
      )}
    </Box>
  );
};

export default ArticlePage;
