import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import Headroom from 'react-headroom';
import './style.scss';

const Header = () => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const { siteTitle } = useSiteMetadata();
  return (
    <Headroom>
      <header className="header">
        <div className="header__inner">
          <h1 className="header__logo">
            <Link to={rootPath}> {siteTitle} </Link>
          </h1>

          <ul className="menu">
            <li><Link to={rootPath}> Home </Link></li>
            <li><a href="#">About</a></li>
          </ul>
          
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
