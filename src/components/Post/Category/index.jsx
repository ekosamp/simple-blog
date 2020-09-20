import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import './style.scss';

const Category = ({ category }) => {
  return (
    <div className="post-category">
    <h5>Category</h5>
      <Link to={`/category/${kebabCase(category)}`}>
        {category}
      </Link>
    </div>
  );
};

export default Category;
