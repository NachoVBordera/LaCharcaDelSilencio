import { useNavigate } from "react-router-dom";
import ButtonUI from "../UI/Button/ButtonUI";
import Screen from "../UI/screen/Screen";
import Board from "../UI/Board/BoardUi";
import React from "react";

const StartGame: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Board>
        <div className="mainDiv">
          <Screen
            id={0}
            text={
              "En un pueblo marcado por tragedias y misterios, un forastero se ve arrastrado a una escalofriante búsqueda cuando una mujer, Julia, pierde a su hijo en la misma cueva donde desapareció su marido años atrás. Decidido a desentrañar los secretos que rodean a este enigma, el protagonista se adentra en la cueva, enfrentándose a terribles descubrimientos y peligros inimaginables."
            }
          />
          <div
            onClick={() => {
              navigate("/game");
            }}
            className="buttondiv"
          >
            <ButtonUI text={"START"} />
          </div>
        </div>
      </Board>
    </>
  );
};

export default StartGame;
