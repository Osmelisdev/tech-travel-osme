import React, { useContext } from 'react';
import CartContext from '../../context/cart';
import { MdDelete } from 'react-icons/md';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
  Total,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);

  let total = 0;
  state.cart.map((el) => {
    total += el.quantity * el.price;
  });

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p> $ {parseFloat(el.quantity * el.price).toFixed(2)} </p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
        <Total>
          <div>
            <h2>Total a Pagar: $ {parseFloat(total).toFixed(2)}</h2>
          </div>
        </Total>
      </ContainerList>
    </Container>
  );
}

export default Cart;
