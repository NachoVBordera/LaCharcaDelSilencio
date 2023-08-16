import React from "react";
import "./Screen.css";

interface ScreenProps {
  text: String;
  id: number;
}

const Screen: React.FC<ScreenProps> = ({ text, id }) => {
  const [duck, setDuck] = React.useState("");

  React.useEffect(() => {
    if (id >= 1 || id <= 8) {
      setDuck("pato1");
    }
    if (id === 9) {
      setDuck("pato2");
    }
    if (id >= 10) {
      setDuck("pato3");
    }
    if (id >= 17) {
      setDuck("pato4");
    }
    console.log(id);
  }, [id]);

  return (
    <>
      <div className="Sceendiv1">
        <div className="Sceendiv2">
          <div className="Sceendiv3">
            <div className="Sceendiv4">
              <div className={"Sceendiv5 " + duck}>
                <p className="SceenP">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
