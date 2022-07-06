import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h1>404 - Not Found</h1>
    </div>
  );
};

export default { component: NotFoundPage };
