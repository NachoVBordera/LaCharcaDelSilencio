import React, { useEffect, useState } from "react";
import Sendmail from "./Sendmail";
import SendResponse from "./SendResponse";
import SendUserMail from "./SendUserMail";
import { Page } from "../../../types";
import { cuento, response } from "../../hooks/useData";
import Screen from "../UI/screen/Screen";
import ButtonUI from "../UI/Button/ButtonUI";
import Board from "../UI/Board/BoardUi";

const Game: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<Page>();

  useEffect(() => {
    setData(cuento.texts.find((pageData: any) => pageData.id === page));
  }, [page]);

  const changePage = (id: number) => {
    setPage(id);
  };

  return (
    <div className="mainDiv">
      {data && (
        <>
          <Board>
            <Screen text={data.id === 14 ? response : data.text} id={data.id} />
            {data.id === 14 ? (
              <Sendmail data={data} changePage={changePage} />
            ) : data.id === 20 ? (
              <SendResponse data={data} changePage={changePage} />
            ) : data.id === 22 ? (
              <SendUserMail data={data} changePage={changePage} />
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
