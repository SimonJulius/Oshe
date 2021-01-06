import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

const HomePageLayout = ({ children }) => {
  return (
    <div className="full-page">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
