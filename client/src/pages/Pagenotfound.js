import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <Layout title={"Go Back - Page not Found"}>
        <div className="pnf">
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oop! Page Not Found</h2>
          <Link to="/" className='pnf-btn'>
            Go Back
          </Link>
        </div>
    </Layout>
  );
};

export default Pagenotfound;