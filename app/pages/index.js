import React from 'react';

import Fullscreen from 'components/Fullscreen';
import Header from 'components/Header';
import Callout from 'components/Callout';
import ProductSelector from 'components/ProductSelector';
import Footer from 'components/Footer';

const Index = () => (
  <Fullscreen>
    <Header />
    <Callout />
    <ProductSelector />
    <Footer />
  </Fullscreen>
);

export default Index;
