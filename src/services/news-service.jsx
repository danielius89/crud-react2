const serverAddress = 'http://localhost:8000';

const formatNews = ({
  id,
  title,
  description,
  img,
  author,
  date,
  categoryId,
  category,
}) => ({
  id,
  title,
  description,
  img,
  author,
  date,
  categoryId,
  category: category.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/news?_expand=category`);
  const news = await response.json();

  return news.map(formatNews);
};

const create = async (newProps) => {
  const response = await fetch(`${serverAddress}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProps),
  });

  const newsBlock = await response.json();

  return newsBlock;
};

const update = async (id, newsProps) => {
  const response = await fetch(`${serverAddress}/news/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newsProps),
  });

  const newsBlock = await response.json();

  return newsBlock;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/news/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCategories = async () => {
  const response = await fetch(`${serverAddress}/categories`);
  const categories = await response.json();

  return categories;
};

const NewsService = {
  fetchAll,
  create,
  update,
  remove,
  fetchCategories,
};

export default NewsService;
