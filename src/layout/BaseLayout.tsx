
import React from 'react';
import { withRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from '../components/Header';

const BaseLayout = () => {
  const previousUrl = sessionStorage.getItem('spacexproject');
  if (previousUrl) {
    sessionStorage.removeItem('spacexproject');
    window.location.href = previousUrl;
  }

  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default withRouter(BaseLayout);
