import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import Formik, { useFormik } from 'formik';
import * as yup from 'yup';
import NewsService from '../services/news-service';

const NewsForm = ({
  onSubmit,
  formLabel,
  submitText,
  color,
  initValues,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [title, setTitle] = React.useState(initValues?.title ?? '');
  const [category, setCategory] = React.useState(initValues?.categoryId ?? '');
  const [img, setImg] = React.useState(initValues?.img ?? '');
  const [description, setDescription] = React.useState(initValues?.description ?? '');
  const [author, setAuthor] = React.useState(initValues?.author ?? '');
  const [date, setDate] = React.useState(initValues?.date ?? '');

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await NewsService.fetchCategories();
      setCategories(fethedCategories);
    })();
  }, []);

  const initialValues = {
    newsTitle: '',
    categoryLabel: '',
    imagePath: '',
    content: '',
    author: '',
    date: '',
  };

  const validationSchema = yup.object({
    newsTitle: yup.string()
      .required('Privalomas naujienos pavadinimas')
      .matches(/^[A-Z]+[a-zA-Z]*$/, 'Pirma raidė turi būti didžioji'),
    categoryLabel: yup.string()
      .required('Privaloma'),
    imagePath: yup.string()
      .required('Privaloma')
      .url('Neteisingas URL adresas'),
    content: yup.string()
      .required('Privaloma')
      .matches(/^[A-Z]+[a-zA-Z]*$/, 'Pirma raidė turi būti didžioji'),
    author: yup.string()
      .required('Privaloma')
      .matches(/^[A-Z]+[a-zA-Z]*$/, 'Pirma raidė turi būti didžioji'),
    date: yup.string()
      .required('Privaloma')
      .matches(/\d{4}-\d{2}-\d{2}/, 'Datos formatas turi būti YYYY-MM-DD'),
  });

  const {
    values, errors, touched, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  /*
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title,
      categoryId: category,
      img,
      description,
      author,
      date,
    });
  };
*/

  return (
    <Formik initValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ values, errors, handleSubmit }) => (
        <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ textAlign: 'center', pb: 2 }}>{formLabel}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              name="newsTitle"
              label="News label"
              fullWidth
              variant="filled"
              value={values.title}
              onChange={(event) => setTitle(event.target.value)}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
            <TextField
              name="categoryLabel"
              label="Category"
              fullWidth
              select
              variant="filled"
              value={values.category}
              onChange={(event) => setCategory(event.target.value)}
              error={touched.category && Boolean(errors.category)}
              helperText={touched.category && errors.category}
            >
              {categories.map(({ id, label: categoryLabel }) => (
                <MenuItem key={id} value={id}>{categoryLabel}</MenuItem>
              ))}
            </TextField>
            <TextField
              name="imagePath"
              label="Image path"
              fullWidth
              variant="filled"
              value={values.img}
              onChange={(event) => setImg(event.target.value)}
              error={touched.img && Boolean(errors.img)}
              helperText={touched.img && errors.img}
            />
            <TextField
              name="content"
              label="Content"
              fullWidth
              variant="filled"
              multiline
              rows={4}
              value={values.description}
              onChange={(event) => setDescription(event.target.value)}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
            <TextField
              name="author"
              label="Author"
              fullWidth
              variant="filled"
              value={values.author}
              onChange={(event) => setAuthor(event.target.value)}
              error={touched.author && Boolean(errors.author)}
              helperText={touched.author && errors.author}
            />
            <TextField
              name="date"
              label="Date"
              fullWidth
              variant="filled"
              value={values.date}
              onChange={(event) => setDate(event.target.value)}
              error={touched.date && Boolean(errors.date)}
              helperText={touched.date && errors.date}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color={color}
                size="large"
              >
                {submitText}
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Formik>
  );
};

export default NewsForm;
