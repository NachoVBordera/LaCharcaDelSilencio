import React from "react";
import InputMailUI from "../UI/InputMail/InputMailUI";
import { Page } from "../../../types";

interface SendUserMailProps {
  data: Page;
  changePage: Function;
}
const SendUserMail: React.FC<SendUserMailProps> = ({ data, changePage }) => {
  return (
    <>
      <div className="buttondiv response1">
        <InputMailUI data={data} changePage={changePage} />
      </div>
    </>
  );
};

export default SendUserMail;
