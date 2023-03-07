import React from 'react'
import { GrNext } from "react-icons/gr";
import style from './nextButton.module.css'

export default function NextButton({ onPress, setStyles }) {
  // botão usado nos cards para avança ou retroceder o slide
  return (
    <div onClick={ onPress } className={style.buttonContainer} style={setStyles}>
      <span><GrNext /></span>
    </div>
  )
}
