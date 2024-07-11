import React from 'react';
import { Page } from '@shopify/polaris';
import ProductForm from './components/ProductForm';

const App: React.FC = () => {
  return (
    <Page title="Product Creation Form">
      <ProductForm />
    </Page>
  );
}

export default App;