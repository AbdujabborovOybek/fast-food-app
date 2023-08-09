import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { acIncItem, acDecItem, acDeleteItem } from "../../Context/items";
import { acClearCart } from "../../Context/items";
import { NumericFormat } from "react-number-format";
import empty from "./7077465.png";
import { enqueueSnackbar } from "notistack";

export const Cart = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handelIncItem = (id) => {
    dispatch(acIncItem(id));
  };

  const handelDecItem = (id) => {
    dispatch(acDecItem(id));
  };

  const handelDeleteItem = (id) => {
    dispatch(acDeleteItem(id));
  };

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handelBuy = () => {
    const msg = "Sizning buyurtmangiz qabul qilindi";
    enqueueSnackbar(msg, { variant: "success" });
    dispatch(acClearCart());
  };

  return (
    <div className="cart">
      <ol className="cart_items">
        <li>
          <h1>Item name</h1>
          <h2>QTY</h2>
          <h3>Price</h3>
        </li>

        {items?.map((item, index) => {
          return (
            <li className="cart__item" key={item.id}>
              <p>{item.name}</p>

              <div>
                <button onClick={() => handelDecItem(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handelIncItem(item.id)}>+</button>
              </div>

              <span>{item.price * item.quantity}</span>
              <button onClick={() => handelDeleteItem(item.id)}>
                <BsFillTrashFill />
              </button>
            </li>
          );
        })}
      </ol>

      <figure style={items?.length ? { display: "none" } : {}}>
        <img src={empty} alt="" />
      </figure>

      <div className="cart_action">
        <h1>
          <span>Total Price:</span>

          <NumericFormat
            value={totalPrice}
            allowLeadingZeros
            thousandSeparator=" "
            displayType="text"
            suffix=" so'm"
          />
        </h1>

        <button disabled={items?.length ? false : true} onClick={handelBuy}>
          Buy
        </button>
      </div>
    </div>
  );
};
