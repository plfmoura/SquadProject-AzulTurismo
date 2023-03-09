import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "../../../components/Button";
import { LoggedContext } from '../../../context/LoggedContext';
import styles from './buyForm.module.css'

export default function BuyForm({tourPrice, quantity, option, id}) {
    const { hasUser, setHasUser, show, setShow  } = useContext(LoggedContext)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form concluído')
    }

    return (
    <form onSubmit={ handleSubmit } className={styles.formContainer}>
        {/* RETIRAR GAMBIARRA PARA VERIFICAÇÃO SE TEM USUARIO */}
        <h2 onClick={() => {setHasUser(!hasUser)}}>R${tourPrice}<span> /pessoa</span></h2>
        <div>
            <label htmlFor="date">Dia da Semana</label>
            <select name="date" id="">
                <option value="default"> Selecione </option>
                { option }
            </select>
            <hr />
            <label htmlFor="date">Quantidade de Pessoas</label>
            <select name="quantity" id="">
                <option value="default">{quantity}</option>
            </select>
        </div>
        {hasUser ? ( 
            <Button type='submit' text='Solicitar Compra' onPress={() => {
                navigate(`/payment/:${id}`);}}/>
                ) : ( 
            <Button type='submit' text='Solicitar Compra' onPress={() => {
                setShow(!show)}}/>
                )
        }
    </form>
  )
}
