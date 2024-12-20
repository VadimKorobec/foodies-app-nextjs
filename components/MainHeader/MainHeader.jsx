import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="A plate with food" priority />
          <Link href="/">Next Level Food</Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
