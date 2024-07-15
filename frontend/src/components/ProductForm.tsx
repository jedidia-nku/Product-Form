
import { observer } from 'mobx-react-lite';
import { Card, Form, FormLayout, TextField, Button, Banner } from '@shopify/polaris';
import productStore from '../stores/ProductStore';
import axios, { AxiosError } from 'axios';

const ProductForm: React.FC = observer(() => {
  const submitForm = async () => {
    try {
      await axios.post('http://localhost:3333/products', {
        title: productStore.title,
        price: productStore.price,
        stock_quantity: productStore.stockQuantity,
        description: productStore.description,
      });
    
      productStore.success = 'Product created successfully!';
      productStore.resetForm(); // Reset the form if necessary
    } catch (error) {
      const axiosError = error as AxiosError;
    
      if (axiosError.response) {
        // Assuming response.data has an error property of type string
        const errorMessage = (axiosError.response.data as { error: string }).error;
        productStore.error = 'Error creating product: ' + errorMessage;
      } else if (axiosError.request) {
        productStore.error = 'Error creating product: No response received from server';
      } else {
        productStore.error = 'Error creating product: ' + axiosError.message;
      }
    }
  };

  return (
    <Card>
      <Form onSubmit={submitForm}>
        <FormLayout>
          <TextField
            label="Title"
            value={productStore.title}
            onChange={(value) => productStore.setTitle(value)}
            autoComplete="off"
            requiredIndicator
          />
          <TextField
            label="Price"
            type="number"
            value={productStore.price}
            onChange={(value) => productStore.setPrice(value)}
            autoComplete="off"
            requiredIndicator
          />
          <TextField
            label="Stock Quantity"
            type="number"
            value={productStore.stockQuantity}
            onChange={(value) => productStore.setStockQuantity(value)}
            autoComplete="off"
            requiredIndicator
          />
          <TextField
            label="Description"
            value={productStore.description}
            onChange={(value) => productStore.setDescription(value)}
            autoComplete="off"
            multiline
            requiredIndicator
          />
          {productStore.error && (
            <Banner tone="critical">{productStore.error}</Banner>
          )}
          {productStore.success && (
            <Banner tone="success">{productStore.success}</Banner>
          )}
          <Button submit variant='secondary'>
            Create Product
          </Button>
        </FormLayout>
      </Form>
    </Card>
  );
});

export default ProductForm;