import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
      <div className={styles.preloaderWrapper}>
        <img src={preloader} className={styles.preloader} alt="Preloader"/>
      </div>
  )
};
export default Preloader;