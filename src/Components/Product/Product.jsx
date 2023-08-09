import React, { memo, Fragment } from "react";
import "./Product.css";
import { NumericFormat } from "react-number-format";
import { acAddItem } from "../../Context/items";
import { useDispatch } from "react-redux";

export const Product = memo(({ data }) => {
  const dispatch = useDispatch();

  const handeAddToCart = (item) => {
    dispatch(acAddItem(item));
  };

  return (
    <Fragment>
      {data?.map((item, index) => {
        return (
          <figure
            key={item.id}
            className="product"
            title={item.name}
            onClick={() => {
              handeAddToCart(item);
            }}
          >
            <img src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
            <NumericFormat
              value={item.price}
              allowLeadingZeros
              thousandSeparator=" "
              displayType="text"
              suffix=" so'm"
            />
          </figure>
        );
      })}
    </Fragment>
  );
});
