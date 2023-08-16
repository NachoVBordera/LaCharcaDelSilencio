import React, { useState } from "react";
import "./InputUI.css";
import { Page } from "../../../../types";
import ButtonUI from "../Button/ButtonUI";

interface InputMailUIProps {
  data: Page;
  changePage: Function;
}

const InputMailUI: React.FC<InputMailUIProps> = ({ data, changePage }) => {
  const [response, setResponse] = useState("");
  const handlerChange = (text: any) => {
    setResponse(text);
  };

  const handlerClick = async () => {
    changePage(23);
    await fetch("https://la-charca-del-silencio.vercel.app/email", {
      method: "POST",
      body: JSON.stringify({
        email: response,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  };

  return (
    <>
      <div className="inputUI1">
        <div className="inputUI2">
          <label htmlFor="email">EMAIL</label>
          <div className="inputUI3">
            <div className="inputUI4">
              <input
                onChange={(e) => handlerChange(e.target.value)}
                id="response mail"
                type="email"
                className="inputUI"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="buttondiv" key={data.options[0].id}>
        {data.options.map((option) => (
          <div
            key={option.id}
            className="divButtonUI"
            onClick={() => {
              handlerClick();
            }}
          >
            <ButtonUI text={option.text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default InputMailUI;
