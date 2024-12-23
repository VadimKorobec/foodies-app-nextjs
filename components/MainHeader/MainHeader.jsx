import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import Navigate from "../Navigate/Navigate";

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
        <Navigate />
      </header>
    </>
  );
};

export default MainHeader;
