import React, { useState } from "react";

import { Page } from "../../../../types";
import ButtonUI from "../Button/ButtonUI";

interface InputMailUIProps {
  data: Page;
  changePage: Function;
}

const InputResponseUI: React.FC<InputMailUIProps> = ({ data, changePage }) => {
  const [response, setResponse] = useState("");
  const handlerChange = (text: any) => {
    setResponse(text);
  };

  const handlerClick = async () => {
    if (!response) {
      window.alert("Tienes que contestar a la pregunta");
      return;
    }
    changePage(21);
    await fetch("https://la-charca-del-silencio.vercel.app/response", {
      method: "POST",
      body: JSON.stringify({
        response: response,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response, data);
  };

  return (
    <>
      <form className="inputUI1">
        <div className="inputUI2">
          <label htmlFor="response">Respuesta</label>
          <div className="inputUI3">
            <div className="inputUI4">
              <input
                onChange={(e) => handlerChange(e.target.value)}
                id="response mail"
                className="inputUI"
                required
              />
            </div>
          </div>
        </div>
      </form>
      <div className="buttonClick" onClick={() => handlerClick()}>
        <ButtonUI text={data.options[0].text} />
      </div>
    </>
  );
};

export default InputResponseUI;
