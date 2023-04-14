import React from "react";
import { useState } from "react";
import style from "../FAQ.module.css";

import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
const index = ({ questions, response }) => {
  const [select, setSelect] = useState(false);

  return (
    <div>
      <div className={style.CardTitulo}>
        <h2>{questions}</h2>
        <span
          className={style.BtnQuestion}
          onClick={() => {
            setSelect(!select);
          }}
        >
          {select ? <IoMdRemoveCircleOutline /> : <IoMdAddCircleOutline />}
        </span>
      </div>

      <p className={select ? style.CrescerResposta : style.Resposta}>
        {response}
      </p>
    </div>
  );
};

export default index;
