import React, { useEffect, useState } from "react";
import Sendmail from "./Sendmail";
import SendResponse from "./SendResponse";
import SendUserMail from "./SendUserMail";
import { Page } from "../../../types";
import Screen from "../UI/screen/Screen";
import ButtonUI from "../UI/Button/ButtonUI";
import Board from "../UI/Board/BoardUi";
import Links from "./fin";
interface ResponseData {
  text: String;
}
interface Cuento {
  texts: Page[];
}
const Game: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<Page>();
  const [cuento, setCuento] = useState<Cuento>();
  const [responseData, setResponseData] = useState<ResponseData>();

  useEffect(() => {
    const fetchData = async () => {
      const cuentoResponse = await fetch(
        "https://la-charca-del-silencio.vercel.app/"
      ).then((response) => response.json());

      const responseResponse = await fetch(
        "https://la-charca-del-silencio.vercel.app/response"
      )
        .then((data) => data.json())
        .then((parsedData) => {
          return parsedData.responses[parsedData.responses.length - 1].text;
        });

      setCuento(cuentoResponse);
      setResponseData(responseResponse);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setData(cuento?.texts.find((pageData: any) => pageData.id === page));
  }, [page, cuento]);

  const changePage = (id: number) => {
    setPage(id);
  };

  return (
    <div className="mainDiv">
      {data && (
        <>
          <Board>
            <Screen
              text={data.id === 14 ? responseData!.toString() : data.text}
              id={data.id}
            />
            {data.id === 14 ? (
              <Sendmail data={data} changePage={changePage} />
            ) : data.id === 20 ? (
              <SendResponse data={data} changePage={changePage} />
            ) : data.id === 22 ? (
              <SendUserMail data={data} changePage={changePage} />
            ) : data.id === 23 ? (
              <Links />
            ) : (
              <div className="buttondiv" key={data.options[0].id}>
                {data.options.map((option) => (
                  <div
                    key={option.id}
                    className="divButtonUI"
                    onClick={() => {
                      changePage(option.chooseID);
                    }}
                  >
                    <ButtonUI text={option.text} />
                  </div>
                ))}
              </div>
            )}
          </Board>
        </>
      )}
    </div>
  );
};

export default Game;
