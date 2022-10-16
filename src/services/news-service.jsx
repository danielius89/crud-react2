const serverAddress = 'http://localhost:8004';
const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'news';
const relationsParams = '_expand=category&_expand=materialType&_expand=color';
/*
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
*/
const fetchAll = async (paramsString = null) => {
  const urlParamsString = paramsString ? `&${paramsString}` : '';
  const response = await fetch(`${domain}/${collectionName}?${relationsParams}${urlParamsString}`);
  const news = await response.json();

  return news;
};
const fetchById = async (id) => {
  const response = await fetch(`${domain}/${collectionName}/${id}?${relationsParams}`);
  const article = await response.json();

  return article;
};

const fetchByIdArr = async (idArr) => {
  const idsParamsString = idArr.map((id) => `id=${id}`).join('&');
  const news = await fetchAll(idsParamsString);

  return news;
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
  fetchByIdArr,
  fetchById,
  create,
  update,
  remove,
  fetchCategories,
};

export default NewsService;
