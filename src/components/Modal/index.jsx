import React from "react";
import style from "./modal.module.css";
import { IoClose } from "react-icons/io5";

export default function Modal({
  children,
  setShow,
  footerContent,
  modalTitle,
}) {
  return (
    <div>
      <div className={style.modalOverlay}>
        <div className={style.modalContainer}>
          <div className={style.modalHeader}>
            <span></span>
            {modalTitle}
            <span onClick={() => setShow(false)}>
              <IoClose />
            </span>
          </div>
            {children}
          <div className={style.modalFooter}>
            {footerContent}
            </div>
        </div>
      </div>
    </div>
  );
}
