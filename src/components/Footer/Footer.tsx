import { useLayoutEffect, useState } from "react";

import styles from "./Footer.module.css";
import { usePersistedState } from "../../hooks/usePersistedState";

const Footer = () => {
  const [themeName, setThemeName] = usePersistedState<"dark" | "light">({
    initialValue: "light",
    key: "theme",
  });

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  useLayoutEffect(() => {
    document.body.dataset.theme = themeName;
  }, [themeName]);

  return (
    <div className={styles.container}>
      <div className={styles.theme}>
        <button onClick={changeTheme} className={styles.button}>
          {themeName}
        </button>
      </div>
    </div>
  );
};

export default Footer;
