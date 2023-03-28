import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaUserCog, FaRegCheckSquare, FaRegCreditCard, FaRegComments } from "react-icons/fa";

export default function FaqCard({title, text}) {
    const state = useSelector((state) => state);
    const faq = state.faq;

    const [ filter, setFilter ] = useState()

    useEffect(() => {
        let check = faq.filter((item) => item.title === title)
        setFilter(check)
    } ,[])

    return (
    <div className='Faq-Card-container'>
{/*       
      <i className={style.iconFaq} style={{backgroundColor: 'green', pointerEvents: 'none', backgroundColor: 'green'}}>
        <FaUserCog />
        <span style={{pointerEvents: 'none'}}>{text}</span>

        </i> */}
    </div>

  )
}
