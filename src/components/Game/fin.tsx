import React from "react";
import ButtonUI from "../UI/Button/ButtonUI";

//@ts-nocheck

const Links: React.FC = () => {
  return (
    <>
      <div className="buttondiv">
        <div className="divButtonUI">
          <a
            href="https://www.linkedin.com/in/nacho-v-bordera-a386b1261/"
            target="_blank"
          >
            <ButtonUI text={"LinkedIn"} />
          </a>
        </div>

        <div className="divButtonUI">
          <a href="https://github.com/NachoVBordera" target="_blank">
            <ButtonUI text={"GitHub"} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
