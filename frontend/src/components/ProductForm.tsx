
import { observer } from 'mobx-react-lite';
import { Card, Form, FormLayout, TextField, Button, Banner } from '@shopify/polaris';
import productStore from '../stores/ProductStore';


const ProductForm: React.FC = observer(() => {


  return (
    <Card>
      <Form onSubmit={()=>productStore.submitForm()}>
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