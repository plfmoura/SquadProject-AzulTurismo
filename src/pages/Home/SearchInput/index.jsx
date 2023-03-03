import React, { useEffect, useState } from 'react'
import style from './search.module.css'
import { IoSearch } from 'react-icons/io5'
import { useSelector } from "react-redux";

export default function SearchInput() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [ region, setRegion ] = useState([])

  // Filtrar os itens retornados que estão retornando triplicados, verificar... por enquanto ficou através do set()
  useEffect(() => {
    products.map(item => region.push(item.region))
    const filteredRegion = new Set();
    region.forEach((region) => filteredRegion.add(region))

    setRegion([...filteredRegion.values()])
  }, [ products ])

  // Função para o botão de pesquisa pegando os valores
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={style.inputContainer}>
      <form onSubmit={ handleSubmit }>
        <div className={style.selectAlign}>
          <div>
            <label htmlFor="regiao">Estado</label>
            <select name="localizacao" disabled>
              <option value="default">Rio de Janeiro</option>
            </select>
          </div>
          <div> 
            <label htmlFor="regiao">Região</label>
            <select name="regiao">
              <option value="default">Todas as Regiões</option>
              {region ? ( 
                region.map((item, key) => (<option value={key} key={key}>{item}</option>))
                ) : (
                <option value="default">Aguarde</option>
                )
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
