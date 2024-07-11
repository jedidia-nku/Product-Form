import { makeAutoObservable } from 'mobx';

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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.success = 'Product created successfully!';
      this.error = '';
      this.resetForm();
    } catch (error) {
      this.error = 'There was an issue with the submission.';
      this.success = '';
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