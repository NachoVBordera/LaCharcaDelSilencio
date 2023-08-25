import React from "react";
import ButtonUI from "../UI/Button/ButtonUI";
import { Page } from "../../../types";
//@ts-nocheck
interface SenMailProps {
  data: Page;
  changePage: (id: number) => void;
}
const Sendmail: React.FC<SenMailProps> = ({ data, changePage }) => {
  const handlerClick = async (i: number) => {
    changePage(15);
    if (i === 0) {
      await fetch("https://la-charca-del-silencio.vercel.app/email/alive", {
        method: "POST",
      });
    } else {
      await fetch("https://la-charca-del-silencio.vercel.app/email/death", {
        method: "POST",
      });
    }
  };

  return (
    <>
      <div className="buttondiv" key={data.options[0].id}>
        {data.options.map((option, i) => (
          <div
            key={option.id}
            className="divButtonUI"
            onClick={() => {
              handlerClick(i);
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
