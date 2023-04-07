import React, { useEffect } from "react";
import style from "./modal.module.css";
import { IoClose } from "react-icons/io5";

export default function Modal({
  children,
  setShow,
  getShow,
  footerContent,
  modalTitle,
}) {
  const overlay = document.querySelector("#overlay");

  const handleCloseClick = (e) => {
    if(e.target.id === 'overlay'){
      setShow(false)
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div
        className={style.modalOverlay}
        id="overlay"
        onClick={handleCloseClick}
      >
        <div
          className={style.modalContainer}
          id="container"
        >
          <div className={style.modalHeader}>
            <span></span>
            {modalTitle}
            <span onClick={() => setShow(false)}>
              <IoClose />
            </span>
          </div>
          {children}
          <div className={style.modalFooter}>{footerContent}</div>
        </div>
      </div>
    </div>
  );
}
