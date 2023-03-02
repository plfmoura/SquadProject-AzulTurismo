import React from 'react'
import style from './search.module.css'
import { IoSearch } from 'react-icons/io5'

export default function SearchInput() {

  let data = ['Região dos Lagos', 'Região Serrana', 'Região Oceânica', 'Região Metropolitana']

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={style.inputContainer}>
      <form onSubmit={ handleSubmit }>
        <div className={style.selectAlign}>
          <div>
            <label htmlFor="regiao">Estado</label>
            <select name="localizacao" id="" disabled>
              <option value="default">Rio de Janeiro</option>
            </select>
          </div>
          <div> 
            <label htmlFor="regiao">Região</label>
            <select name="regiao" id="">
              <option value="default">Todas as Reuniões</option>
              {
                data.map((item, key) => <option value={key} key={key}>{item}</option>)
              }
            </select>
          </div>
          <div>
            <label htmlFor="regiao">Qt. Pessoas</label>
            <select name="regiao" id="">
              <option value="default">Selecione</option>
              <option value="1">1 pessoa</option>
              <option value="2">até 2 pessoas</option>
              <option value="multi">Acima de 3 pessoas</option>
            </select>
          </div>
        </div>
        <button type='submit'><IoSearch className={style.iconSearch}/></button>
      </form>
    </div>
  )
}
