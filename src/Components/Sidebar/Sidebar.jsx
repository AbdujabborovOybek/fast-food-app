import React, { memo } from "react";
import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { acSidebar } from "../../Context/sidebar";

export const Sidebar = memo(() => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.sidebar);

  return (
    <aside className={open ? "sidebar active" : "sidebar"}>
      <div className="sidebar_header">
        <h1>Fast Food</h1>

        <button onClick={() => dispatch(acSidebar())}>Close</button>
      </div>
    </aside>
  );
});
