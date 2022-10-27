import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "./ScrollTopButton.module.css";

const ScrollTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.topToBtm}>
      {showTopBtn && (
        <FaAngleUp
          className={`${styles.iconPosition} ${styles.iconStyle}`}
          onClick={handleGoToTop}
        />
      )}
    </div>
  );
};

export default ScrollTopButton;
