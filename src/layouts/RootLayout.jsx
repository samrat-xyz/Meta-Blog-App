import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default RootLayout;
