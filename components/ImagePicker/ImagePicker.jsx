"use client";

import { useState } from "react";
import styles from "./ImagePicker.module.css";

const ImagePicker = ({ label, name }) => {
  const [showInput, setShowInput] = useState(false);
  console.log(showInput)

  const handlePickClick = () => {
    setShowInput(true);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        {showInput && (
          <input
            className={showInput ? '' : styles.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
          />
        )}
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
