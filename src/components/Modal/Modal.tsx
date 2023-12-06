import React, { FC } from "react";

import Portal from "../Portal/Portal";

import styles from "./Modal.module.css";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

interface ModalProps {
  isOpen: any;
  onCancel: any;
  onSubmit: any;
  url: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onCancel, onSubmit, url }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className={styles.modalOverlay} onClick={onCancel}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <Typography>Хотите перейти по ссылке?</Typography>
              </div>

              <div className={styles.modalFooter}>
                <Button
                  className={styles.button}
                  color="secondary"
                  onClick={onCancel}
                >
                  Отмена
                </Button>
                <Button onClick={onSubmit}>
                  <a className={styles.link} href={url}>
                    Перейти
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
