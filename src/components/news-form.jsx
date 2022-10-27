import React from 'react';
import {
  Paper,
  MenuItem,
  TextField,
  Box,
  Button,
  // MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import NewsService from '../services/news-service';

const validationSchema = yup.object({
  title: yup.string()
    .required('Privalomas naujienos pavadinimas'),
  category: yup.string()
    .required('Pasirinkite kategoriją'),
  img: yup.string()
    .required('Įkelkite nuotraukos nuorodą')
    .url('Neteisingas URL formatas'),
  description: yup.string()
    .required('Įkelkite naujienos aprašymą'),
  author: yup.string()
    .required('Įrašykite autoriaus vardą')
    .matches(/^[A-Z]+[a-zA-Z]*$/, 'Turi būti tik vardas iš didžiosios raidės'),
  date: yup.string()
    .required('Įveskite datą')
    .matches(/\d{4}-\d{2}-\d{2}/, 'Datos formatas turi būti YYYY-MM-DD'),
});

const NewsForm = ({
  submitText,
  color,
  onFormSubmit,
  initValues,

}) => {
  const [categories, setCategories] = React.useState([]);

  const initialValues = {
    title: initValues?.title ?? '',
    category: initValues?.categoryId ?? '',
    img: initValues?.img ?? '',
    description: initValues?.description ?? '',
    author: initValues?.author ?? '',
    date: initValues?.date ?? '',
  };

  const onSubmit = (values) => {
    onFormSubmit({
      title: values.title,
      categoryId: values.category,
      img: values.img,
      description: values.description,
      author: values.author,
      date: values.date,
    });
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await NewsService.fetchCategories();
      setCategories(fethedCategories);
    })();
  }, []);

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          name="title"
          label="News label"
          fullWidth
          variant="filled"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
        />

        <TextField
          name="category"
          label="Category"
          fullWidth
          select
          variant="filled"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && Boolean(errors.category)}
          helperText={touched.category && errors.category}
        >
          {categories.map(({ id, label: category }) => (
            <MenuItem key={id} value={id}>{category}</MenuItem>
          ))}
        </TextField>

        <TextField
          name="img"
          label="Image path"
          fullWidth
          variant="filled"
          value={values.img}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.img && Boolean(errors.img)}
          helperText={touched.img && errors.img}
        />
        <TextField
          name="description"
          label="Content"
          fullWidth
          variant="filled"
          multiline
          rows={8}
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
        <TextField
          name="author"
          label="Author"
          fullWidth
          variant="filled"
          value={values.author}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.author && Boolean(errors.author)}
          helperText={touched.author && errors.author}
        />
        <TextField
          name="date"
          label="Date"
          fullWidth
          variant="filled"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
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

  );
};
export default NewsForm;
