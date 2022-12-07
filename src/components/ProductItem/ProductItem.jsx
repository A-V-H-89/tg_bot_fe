import React from 'react';
import Button from '../Button/Button';
import './ProductItem.css';

function ProductItem({ product, className, onAdd }) {
  const onAddHandler = () => {
    onAdd(product);
  };
  return (
    <div className={'product ' + className}>
      <div className='img' />
      <div className='title'>{product.title}</div>
      <div className='description'>{product.description}</div>
      <div className='price'>
        <span>
          Prics: <b>{product.price}</b>
        </span>
      </div>
      <Button className='add-btn' onClick={onAddHandler}>
        Add to Basket
      </Button>
    </div>
  );
}

export default ProductItem;
