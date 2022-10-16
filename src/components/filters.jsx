import * as React from 'react';
import { Button, Divider } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import AutoSelectField from './category-filter';
import CategoryService from '../services/category-service';

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [categories, setCategories] = React.useState([]);

  const [category, setCategory] = React.useState(null);

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory) {
      searchParams.set('categoryId', newCategory.id);
    } else {
      searchParams.delete('categoryId');
    }

    setSearchParams(searchParams);
    setCategory(newCategory);
  };

  const deleteFilters = () => {
    searchParams.delete('categoryId');

    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories] = await Promise.all([
        CategoryService.fetchAll(),

      ]);

      const categoryId = searchParams.get('categoryId');
      if (categoryId) {
        const categoryInit = fetchedCategories.find((cat) => cat.id === categoryId) ?? null;
        setCategory(categoryInit);
      }

      setCategories(fetchedCategories);

      setIntialSetupDone(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {initialSetupDone && (
        <>

          <AutoSelectField
            options={categories}
            value={category}
            onChange={handleCategoryChange}
          />
          <Divider sx={{ my: 2 }} />

          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={deleteFilters}
          >
            Pašalinti filtrus
          </Button>
        </>
      )}

    </div>
  );
};

export default Filters;
