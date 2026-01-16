import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default RootLayout;
