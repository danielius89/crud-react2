import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import NewsService from '../services/news-service';

const NewsForm = ({
  onSubmit,
  formLabel,
  submitText,
  color,
  initValues,
}) => {
  const [categories, setCategories] = React.useState([]);
  const [label, setLabel] = React.useState(initValues?.label ?? '');
  const [category, setCategory] = React.useState(initValues?.categoryId ?? '');
  const [img, setImg] = React.useState(initValues?.img ?? '');
  const [description, setDescription] = React.useState(initValues?.description ?? '');
  const [author, setAuthor] = React.useState(initValues?.author ?? '');
  const [date, setDate] = React.useState(initValues?.date ?? '');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      label,
      categoryId: category,
      img,
      description,
      author,
      date,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCategories = await NewsService.fetchCategories();
      setCategories(fethedCategories);
    })();
  }, []);

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ textAlign: 'center', pb: 2 }}>{formLabel}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="News label"
          fullWidth
          variant="filled"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        />
        <TextField
          label="Category"
          fullWidth
          select
          variant="filled"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map(({ id, label: categoryLabel }) => (
            <MenuItem key={id} value={id}>{categoryLabel}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Image path"
          fullWidth
          variant="filled"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <TextField
          label="Content"
          fullWidth
          variant="filled"
          multiline
          rows={4}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          label="Author"
          fullWidth
          variant="filled"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <TextField
          label="Date"
          fullWidth
          variant="filled"
          value={date}
          onChange={(event) => setDate(event.target.value)}
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
