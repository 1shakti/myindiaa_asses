import React from 'react';
import Layout from '../layout/layout';
import ProductList from '../components/product/productList';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800">Welcome to My Website</h1>
      <ProductList />
    </Layout>
  );
}