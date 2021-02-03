import React from "react";
import styles from "./DeadMenu.module.css";
import contraLogo from "./../../../assets/sprite-sheets/Dead.png";

export default function Dead () {
  return (
    <div className={styles.wrapper}>
      You are Dead !!
      <img className={styles.logo} src={contraLogo} alt="Contra-logo"></img>
    </div>
  );
};
