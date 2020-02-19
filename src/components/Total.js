import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const car = useSelector( state => state.car );
  const price = useSelector( state => state.additionalPrice );

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + price}</h4>
    </div>
  );
};

export default Total;
