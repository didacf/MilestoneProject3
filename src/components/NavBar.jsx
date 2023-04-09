import React, { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

import styles from "./../styles/NavBar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);
  const [cookie, setCookie] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    setCookie(Cookies.get("bruh"));

  });

  async function logout() {
    setCookie("");
    Cookies.remove("bruh");
    const response = await fetch("http://localhost:5000/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/login");
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <a className={styles.logo} href={"./"}>
            eFlights
          </a>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              Flight Search
            </a>

            {cookie ? (
              <div style={{display:"inline"}}>
                <a className={styles.nav__item} href={"/cart"}>
                  Cart
                </a>
                <button
                  onClick={() => {
                    logout();
                  }}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <a className={styles.nav__item} href={"/Login"}>
                Login/Sign up
              </a>
            )}
          </nav>
        </div>
        <div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
