import React from "react";
import InputResponseUI from "../UI/Input/Input";
import { Page } from "../../../types";
interface SendResponseProps {
  data: Page;
  changePage: (id: number) => void;
}

const SendResponse: React.FC<SendResponseProps> = ({ data, changePage }) => {
  return (
    <>
      <div className="buttondiv response1">
        <InputResponseUI data={data} changePage={changePage} />
      </div>
    </>
  );
};

export default SendResponse;
