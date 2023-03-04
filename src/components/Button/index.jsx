import React from 'react'
import './button.css'

export default function Button({text, type}) {
  return (
    <button class="button-65" role="button" type={type}>{ text }</button>
  )
}
