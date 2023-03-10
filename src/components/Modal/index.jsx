import React, { useState } from 'react'
import style from './modal.module.css'
import { IoClose } from 'react-icons/io5';

export default function Modal({ children, setShow, setClose }) {
    return (
        <div>
            <div className={style.modalOverlay} 
                >
                <div className={style.modalContainer}>
                    <div className={style.modalContent}>
                        <div className={style.modalHeader}>
                            <span onClick={ setClose }><IoClose /></span>
                        </div>
                        {children}
                        <div className={style.modalFooter}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
