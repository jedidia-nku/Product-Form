import { makeAutoObservable } from 'mobx';
import axios, { AxiosError } from 'axios';


class ProductStore {
  title: string = '';
  price: string = '';
  stockQuantity: string = '';
  description: string = '';
  error: string = '';
  success: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title: string) {
    this.title = title;
  }

  setPrice(price: string) {
    this.price = price;
  }

  setStockQuantity(stockQuantity: string) {
    this.stockQuantity = stockQuantity;
  }

  setDescription(description: string) {
    this.description = description;
  }

  validateForm(): boolean {
    if (!this.title || !this.price || !this.stockQuantity || !this.description) {
      this.error = 'All fields are required.';
      return false;
    }
    if (isNaN(Number(this.price)) || isNaN(Number(this.stockQuantity))) {
      this.error = 'Price and Stock Quantity must be numbers.';
      return false;
    }
    this.error = '';
    return true;
  }

  async submitForm() {
    if (!this.validateForm()) {
      return;
    }

    try {
      await axios.post('http://localhost:3333/products', {
        title: this.title,
        price: this.price,
        stock_quantity: this.stockQuantity,
        description: this.description,
      });
    
      this.success = 'Product created successfully!';
      this.resetForm(); // Reset the form if necessary
    } catch (error) {
      const axiosError = error as AxiosError;
    
      if (axiosError.response) {
        // Assuming response.data has an error property of type string
        const errorMessage = (axiosError.response.data as { error: string }).error;
        this.error = 'Error creating product: ' + errorMessage;
      } else if (axiosError.request) {
        this.error = 'Error creating product: No response received from server';
      } else {
        this.error = 'Error creating product: ' + axiosError.message;
      }
    }
  }

  resetForm() {
    this.title = '';
    this.price = '';
    this.stockQuantity = '';
    this.description = '';
  }
}

export default new ProductStore();