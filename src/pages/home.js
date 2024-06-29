import React from 'react';
import Layout from '../layout/layout';
import { Product } from '../container';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-center text-lg font-medium text-gray-600">Welcome to My MyIndiaa E-commerce Site</h1>
      <Product />
    </Layout>
  );
}