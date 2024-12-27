import MealsFormSubmit from "@/components/MealsFormSubmit/MealsFormSubmit";

import styles from "./page.module.css";

const ShareMealPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <MealsFormSubmit />
      </main>
    </>
  );
};

export default ShareMealPage;
