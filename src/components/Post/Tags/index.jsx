import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import './style.scss';

const Tags = ({ tags }) => {
  return (
    <ul className="post-tags">
      <h5>Tags</h5>
      {tags.map(tag =>
        <li key={tag}>
          <Link to={`/tag/${kebabCase(tag)}`}>
            #{tag}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Tags;
