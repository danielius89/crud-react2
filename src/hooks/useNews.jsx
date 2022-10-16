import React from 'react';
import NewsContext from 'global/news-context';

const useNewsHook = () => {
  const newsContext = React.useContext(NewsContext);

  return newsContext;
};

export default useNewsHook;
