import React, { useEffect,useState } from 'react'
import style from './search.module.css'
import { IoSearch } from 'react-icons/io5'
import { useSelector } from "react-redux";

export default function SearchInput({setFiltered,setMyRegion, setShowTop}) {
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
  
    let option_region=e.target.regiao.value;
    let option_quantity=e.target.quantity.value;
    let filtred=[];
    filtred=(option_region==="all"&&option_quantity==="all")?products
    :(option_region==="all"&&option_quantity!=="all")?products.filter((product)=>product.capacity-product.sold>=Number(option_quantity))
    :(option_region!=="all"&&option_quantity==="all")?products.filter((product)=>product.region.match(option_region))
    :products.filter((product)=>product.capacity-product.sold>=Number(option_quantity)&&product.region.match(option_region));
    setFiltered(filtred);
    setMyRegion(option_region==="all"?"Todas as Regiões":option_region);
    setShowTop(option_region==="all"?"block":'none')
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
              <option value="all">Todas as Regiões</option>
              {region ? ( 
                region.map((item, key) => (<option value={item} key={key}>{item}</option>))
                ) : (
                <option value="default">Aguarde</option>
                )
              }
            </select>
          </div>
          <div>
            <label htmlFor="regiao">Qt. Pessoas</label>
            <select name="quantity" id="">
              <option value="all">Selecione</option>
              <option value="1">1 pessoa</option>
              <option value="2">até 2 pessoas</option>
              <option value="3">Acima de 3 pessoas</option>
            </select>
          </div>
        </div>
        <button type='submit'><IoSearch className={style.iconSearch}/></button>
      </form>
    </div>
  )
}
