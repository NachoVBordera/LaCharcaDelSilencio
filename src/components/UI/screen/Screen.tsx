import React from "react";
import "./Screen.css";
import pato1 from "../../../assets/pato1.png";
import pato2 from "../../../assets/pato2.png";
import pato3 from "../../../assets/pato3.png";
import pato4 from "../../../assets/pato4.png";

interface ScreenProps {
  text: String;
  id: number;
}

const Screen: React.FC<ScreenProps> = ({ text, id }) => {
  const [duck, setDuck] = React.useState("");
  const [blinkClass, setBlinkClass] = React.useState("");
  React.useEffect(() => {
    if (id >= 1 && id <= 8) {
      setDuck(pato1);
    } else if (id === 9) {
      setDuck(pato2);
    } else if (id >= 10 && id <= 16) {
      setDuck(pato3);
    } else if (id >= 17) {
      setDuck(pato4);
    }

    if (id === 1 || id === 9 || id === 10 || id === 17) {
      setBlinkClass("blink");
    }

    const timeout = setTimeout(() => {
      setBlinkClass("");
    }, 2000);

    // Limpia el timeout si el componente se desmonta o si "id" cambia nuevamente
    return () => {
      clearTimeout(timeout);
    };
  }, [id]);

  return (
    <>
      <div className="Sceendiv1">
        <div className="Sceendiv2">
          <div className="Sceendiv3">
            <div className="Sceendiv4">
              <div className={"Sceendiv5pato1"}>
                <p className="SceenP">{text}</p>
                <span className={blinkClass + " spanduck"}>
                  {duck && <img src={duck} className="duckImg" alt="Duck" />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
