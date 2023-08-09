import React, { useEffect, useState } from "react";
import "./Products.css";
import { Product } from "../../Components/Product/Product";
import data from "./data.json";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const productTypes = (arr) => {
  return Array.from(new Set(arr.map((item) => item.q)));
};

export const types = productTypes(data);

export const Products = () => {
  const { search: qurey } = useLocation();
  const q = qurey?.split("=")[1]?.split("%20").join(" ") || "";
  const search = useSelector((state) => state.search);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setProducts(result);
  }, [search]);

  useEffect(() => {
    const result = data.filter((item) => item.q.includes(q));
    setProducts(result);
  }, [q]);

  return (
    <div className="products">
      <Product data={products} />
    </div>
  );
};
