import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/MealsGrid/MealsGrid";
import { getMeals } from "@/lib/meals";

import styles from "./page.module.css";
import MealsLoadingPage from "./loading";

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delocoius meals, created
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<MealsLoadingPage/>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
