
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  image: 'https://via.placeholder.com/150'
};

test('renders product card with correct details', () => {
  render(<ProductCard product={mockProduct} />);

  const titleElement = screen.getByText(/Test Product/i);
  expect(titleElement).toBeInTheDocument();

  const priceElement = screen.getByText(/\$29.99/i);
  expect(priceElement).toBeInTheDocument();

  const imageElement = screen.getByRole('img', { name: /Test Product/i });
  expect(imageElement).toHaveAttribute('src', mockProduct.image);
});
