"use client";

import { useFormStatus } from "react-dom";

import { shareMeal } from "@/lib/actions";
import ImagePicker from "../ImagePicker/ImagePicker";

import styles from "./MealsFormSubmit.module.css";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();
  

  return (
    <form className={styles.form} action={shareMeal}>
      <div className={styles.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker label="Your image" name="image" />
      <p className={styles.actions}>
        <button disabled={pending} type="submit">
          {pending ? 'Share meal':'Submitting...' }
        </button>
      </p>
    </form>
  );
};

export default MealsFormSubmit;
