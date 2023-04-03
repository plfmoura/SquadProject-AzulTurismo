import React, { useEffect,useState } from 'react'
import './mobileSearchInput.css'
import { IoSearch } from 'react-icons/io5'
import { useSelector } from "react-redux";

export default function MobileSearchInput({setFiltered,setMyRegion, setShowTop}) {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [ region, setRegion ] = useState([])
  const [ active, setActive ] = useState(false)

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
    let filtred=[];
    filtred=(option_region==="all") ? products : products.filter((product)=>product.region.match(option_region))
    setFiltered(filtred);
    setMyRegion(option_region==="all"?"Todas as Regiões":option_region);
    setShowTop(option_region==="all"?"block":'none')
    window.scrollTo(0, 550);
    setTimeout(() => {
      setActive(false)
    }, [200]) 
  }

  // para tornar o search inativo caso o usuário role a tela
  const [position, setPosition] = useState()

  useEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY)
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    setTimeout(() => {
      setActive(false)
    } , [400])
  } ,[position])
  //=========================

  return (
    <>
      {active ? (
        <div className='mobile-search-container ' >
        <form onSubmit={ handleSubmit } className='mobile-search-content'>
          <div className='mobile-search-align-field'>
            <label htmlFor="regiao">Selecione uma Região</label>
            <select name="regiao" >
              <option value="all">Todas as Regiões</option>
              {region ? ( 
                region.map((item, key) => (<option value={item} key={key}>{item}</option>))
                ) : (
                <option value="default">Aguarde</option>
                )
              }
            </select>
          </div>
          <button type='submit' ><IoSearch className='mobile-search-icon'/></button>
        </form>
      </div>
      ) : (
        <div className='hidden-mobile-search-container' onClick={() => setActive(true)}>
          <button><IoSearch className='hidden-mobile-search-icon'/></button>
        </div>
      )}
    </>
  )
}
