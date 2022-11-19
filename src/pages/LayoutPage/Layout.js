import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CookitLogo, GitHubLogo } from '../../icons';

function Layout() {
  return (
    <>
      <header className="header">
        <div className="main-container">
          <div className="logo-container">
            <Link to="/">
              <CookitLogo />
            </Link>
            <h1>Ням-ням!</h1>
          </div>
        </div>
      </header>
      <div className="content-container">
        <Outlet />
      </div>
      <footer className="footer">
        <span>Created by Dimitar Filipov</span>
        <a
          href="https://github.com/dphilipov"
          target="_blank"
          rel="noreferrer"
          className="footer-github-icon"
        >
          <GitHubLogo />
        </a>
      </footer>
    </>
  );
}

export default Layout;
