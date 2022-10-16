import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Alert, Divider, Typography,
} from '@mui/material';
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

  return (
    <Box sx={{ mt: 4, mx: 4 }}>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {article && (
      <Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>{article.title}</Typography>
          <Typography variant="body1">{article.description}</Typography>
        </Box>
        <Divider />
      </Box>
      )}
    </Box>
  );
};

export default ArticlePage;
