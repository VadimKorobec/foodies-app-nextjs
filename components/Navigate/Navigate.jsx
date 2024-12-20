"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './Navigate.module.css'

const Navigate = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            className={pathname === "/meals" ? styles.active : ""}
            href="/meals"
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/community" ? styles.active : ""}
            href="/community"
          >
            Foodies Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
