
import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  return (
    <div>
      <RiShoppingCartLine size="3rem" />
      <span></span>
    </div>
  );
}

export default CartWidget;
