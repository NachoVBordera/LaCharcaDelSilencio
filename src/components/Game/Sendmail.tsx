import React from "react";
import ButtonUI from "../UI/Button/ButtonUI";
import { Page } from "../../../types";

interface SenMailProps {
  data: Page;
  changePage: (id: number) => void;
}
const Sendmail: React.FC<SenMailProps> = ({ data, changePage }) => {
  const handlerDeath = async () => {
    changePage(15);
    // await fetch("http://localhost:8080/email/death", { method: "POST" });
  };
  const handlerAlive = async () => {
    changePage(15);

    // await fetch("http://localhost:8080/email/alive", { method: "POST" });
  };

  return (
    <>
      <div key={data.id} className="buttondiv">
        <div onClick={() => handlerAlive()}>
          <ButtonUI text={data.options[0].text} />
        </div>
        <div onClick={() => handlerDeath()}>
          <ButtonUI text={data.options[1].text} />
        </div>
      </div>
    </>
  );
};

export default Sendmail;
