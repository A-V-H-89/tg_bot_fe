import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';

const products = [
  { id: '1', title: 'Shorts', price: 5000, description: 'color Green' },
  { id: '2', title: 'Djeans', price: 7000, description: 'color blue' },
  { id: '3', title: 'Tshort', price: 2000, description: 'color red' },
  { id: '4', title: 'Cap', price: 1000, description: 'color purple' },
];

const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

function ProductList() {
  const [addedItems, setAddedItems] = useState([]);
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
        products: addedItems,
        totalPrice: getTotalPrice(addedItems),
        queryId
    };

    fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
  }, []);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className='list'>
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className='item' />
      ))}
    </div>
  );
}

export default ProductList;
