import React from 'react'
import { useState } from 'react';
import style from "../FAQ.module.css";

import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
const index = (questions,response,id,key) => {

    // FUNCTION CLICK DO OVERLAY

    // const [select, setSelect] = useState(null);

    // const Toggle = (id) => {

    //     if (select == id) {
    //         return setSelect(null);
    //     }
    //     setSelect(id);

    // };


    return (

          <div key={key}>
                <div className={style.CardTitulo}>
                    <h2>{questions}</h2>
                    <span
                        className={style.BtnQuestion}
                        onClick={() => {
                            const IdFaq = id;
                            if (IdFaq) {
                                Toggle(IdFaq)
                            }
                        }}
                    >
                        {select == id ? (
                            <IoMdRemoveCircleOutline />
                        ) : (
                            <IoMdAddCircleOutline />
                        )}
                    </span>
                </div>

                <p
                    className={
                        select == id
                            ? style.CrescerResposta
                            : style.Resposta
                    }
                >
                    {response}
                </p>
            </div> 
      
    )
}

export default index