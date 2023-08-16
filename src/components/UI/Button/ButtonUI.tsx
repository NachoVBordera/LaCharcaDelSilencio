import "./ButtonUI.css";
import React from "react";
interface ButtonUIProps {
  text: String | undefined;
}
const ButtonUI: React.FC<ButtonUIProps> = ({ text }) => {
  return (
    <>
      <div className="divButton1">
        <div className="divButton2">
          <div className="divButton3">
            <div className="divButton4">
              <div className="divButton5">
                <p className="pButton">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonUI;
