import React, { useState } from 'react'
import style from './modal.module.css'
import { IoClose } from 'react-icons/io5';

export default function Modal({ children, onShow, onClose }) {
    const [ show, setShow ] = useState(onShow)
    let showResponse = onShow ? ('block') : ('none')
  
    return (
        <div>
            <div className={style.modalOverlay} 
                style={{ display: showResponse }}
                >
                <div className={style.modalContainer}>
                    <div className={style.modalContent}>
                        <div className={style.modalHeader}>
                            <span><IoClose onClick={() => setShow(onClose)}/></span>
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
