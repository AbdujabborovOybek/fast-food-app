import React, { useState } from "react";
import "./Header.css";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { acSearch } from "../../Context/search";
import { acSidebar } from "../../Context/sidebar";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.sidebar);

  const handeToggleMenu = () => {
    dispatch(acSidebar());
  };

  return (
    <nav className="navbar">
      <div className="navbar_left">
        <button onClick={handeToggleMenu}>
          {open ? <AiOutlineMenuUnfold /> : <AiOutlineMenu />}
        </button>
        <h2>Fast Food Service</h2>
      </div>

      <div className="navbar_right">
        <input
          className={search ? "search_product active" : "search_product"}
          type="search"
          placeholder="Search"
          onBlur={() => {
            setSearch(false);
            setValue(null);
            dispatch(acSearch(""));
          }}
          onFocus={() => setSearch(true)}
          value={value ?? ""}
          onChange={(e) => {
            setValue(e.target.value);
            dispatch(acSearch(e.target.value));
          }}
        />

        <button>
          <BsSearch />
        </button>
      </div>
    </nav>
  );
};
