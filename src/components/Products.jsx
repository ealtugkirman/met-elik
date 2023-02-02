import React from 'react';

// import data
import { products } from '../data';

// import components
import ProductSlider from './ProductSlider';

const Products = () => {
  const { title, subtitle } = products;
  return (
    <section className='py-[50px] bg-blue-300 font-robo text-base leading-relaxed lg:py-[70px] text-center'>
      <div className='container mx-auto'>
        <div>
          <h2 className='text-2xl lg:text-[40px] leading-tight font-semibold mb-4'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>
            {subtitle}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;