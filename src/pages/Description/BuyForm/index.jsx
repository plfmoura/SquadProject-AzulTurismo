import { style } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "../../../components/Button";
import styles from './buyForm.module.css'

export default function BuyForm({tourPrice, quantity, option, id}) {
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form concluído')
    }

    return (
    <form onSubmit={ handleSubmit } className={styles.formContainer}>
        <h2>R${tourPrice}<span> /pessoa</span></h2>
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
      <Button type='submit' text='Solicitar Compra' onPress={ () => {
                navigate(`/payment/:${id}`);}}/>
    </form>
  )
}
