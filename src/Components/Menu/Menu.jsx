import React, { memo } from "react";
import "./Menu.css";
import { types } from "../../Pages/Products/Products";
import { useNavigate } from "react-router-dom";

export const Menu = memo(() => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`?q=${type}`);
  };

  return (
    <div className="menu">
      {types.map((type, index) => {
        return (
          <button
            key={index}
            className="menu_item"
            onClick={() => handleClick(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
});
