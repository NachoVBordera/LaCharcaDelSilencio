import React, { ReactNode } from "react";
import "./Scene.css";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import sun from "../../assets/sun.png";
import olas2 from "../../assets/olas2.png";
import olas3 from "../../assets/sea.png";
interface BoardProps {
  children: ReactNode;
}

const Scene: React.FC<BoardProps> = ({ children }) => {
  return (
    <>
      <img src={sun} className="sunParallax"></img>

      <div className="parallaxContainer">
        <MouseParallaxContainer
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          <MouseParallaxChild
            className="container"
            factorX={0.04}
            factorY={0.0}
            inverted={true}
          >
            <img src={olas3} className="testParallax1"></img>
          </MouseParallaxChild>
          <section>{children}</section>
          <MouseParallaxChild
            className="container"
            factorX={0.03}
            factorY={0.0}
          >
            <img src={olas3} className="testParallax2"></img>
          </MouseParallaxChild>
          <MouseParallaxChild
            className="container"
            factorX={0.02}
            factorY={0.0}
            inverted={true}
          >
            <img src={olas2} className="testParallax3"></img>
          </MouseParallaxChild>
          <MouseParallaxChild
            className="container"
            factorX={0.01}
            factorY={0.0}
          >
            <img src={olas3} className="testParallax4"></img>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </>
  );
};

export default Scene;
