import React from "react";
import { Header } from "./Components/Header/Header";
import { Products } from "./Pages/Products/Products";
import { Menu } from "./Components/Menu/Menu";
import { Cart } from "./Pages/Cart/Cart";
import { Sidebar } from "./Components/Sidebar/Sidebar";

export const Router = () => {
  return (
    <main className="main">
      <header className="header">
        <Header />
      </header>
      <aside className="aside">
        <Cart />
        <Sidebar />
      </aside>
      <section className="section">
        <Products />
        <Menu />
      </section>
    </main>
  );
};
