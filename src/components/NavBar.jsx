import React from "react";
import { useState } from "react";

import styles from "./../styles/NavBar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

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
              Flights
            </a>
            <a className={styles.nav__item} href={"/"}>
              About
            </a>
            <a className={styles.nav__item} href={"/"}>
              Contact
            </a>
            <a className={styles.nav__item} href={"/Login"}>
              Login/Sign up
            </a>
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
