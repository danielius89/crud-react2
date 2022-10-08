import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Alert } from '@mui/material';
import ArticleService from '../../services/article-service';
import { Content } from './components';

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
      {article && <Content article={article} />}
    </Box>
  );
};

export default ArticlePage;
