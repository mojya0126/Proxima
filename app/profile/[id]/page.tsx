"use client"
import Link from 'next/link';
import React, { useState } from "react";

export default function App() {
    const [openMenu, setOpenMenu] = useState(false);
  
    const handleMenuOpen = () => {
      setOpenMenu(!openMenu);
    };
  
    return (
      <div className="App">
        <div className="container mx-auto px-3">
          <header className="flex justify-between py-3">
            <h1>ロゴ</h1>
  
            {/* humbergerbutton */}
            <button
              onClick={handleMenuOpen}
              type="button"
              className="z-10 space-y-2"
            >
                aaa
            </button>
  
            {/* nav */}
            <nav
              className={
                openMenu
                  ? "fixed right-0 top-0 w-8/12 pt-8 px-3 transition duration-1000"
                  : "fixed right-[-100%] transition duration-1000"
              }
            >
              <ul className="mt-6">
                <li className="">
                  <a href="https://okalog.info/" className="py-2 inline-block">
                    ABOUT
                  </a>
                </li>
                <li className="">
                  <a href="https://okalog.info/" className="py-2 inline-block">
                    WORKS
                  </a>
                </li>
                <li className="">
                  <a href="https://okalog.info/" className="py-2 inline-block">
                    PEOPLE
                  </a>
                </li>
                <li className="">
                  <a href="https://okalog.info/" className="py-2 inline-block">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </header>
  
          {/* ここ以下はメインビジュアル用のコード */}
          <main>
            {/* MainVisual */}
            <div className="mt-10">
              <div className="mx-auto w-full">
                
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }