import * as React from 'react';
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
        <AutoSelectField
          options={categories}
          value={category}
          onChange={handleCategoryChange}
        />
      )}

    </div>
  );
};

export default Filters;
