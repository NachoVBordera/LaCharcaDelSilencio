import React from "react";
import ButtonUI from "../UI/Button/ButtonUI";
import { Page } from "../../../types";
//@ts-nocheck
interface SenMailProps {
  data: Page;
  changePage: (id: number) => void;
}
const Sendmail: React.FC<SenMailProps> = ({ data, changePage }) => {
  const handlerClick = async () => {
    changePage(15);
    //TODO:
    //dead
    await fetch("http://localhost:8080/email/death", { method: "POST" });
    // alive
    await fetch("http://localhost:8080/email/alive", { method: "POST" });
  };

  return (
    <>
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

export default Sendmail;
