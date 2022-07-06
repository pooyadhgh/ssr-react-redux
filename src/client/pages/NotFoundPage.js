import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  );
};

export default { component: NotFoundPage };
