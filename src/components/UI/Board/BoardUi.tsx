import React, { ChildContextProvider, ReactNode } from "react";
import "./Board.css";
interface BoardProps {
  children: ReactNode;
}

const Board: React.FC<BoardProps> = ({ children }) => {
  return (
    <>
      <div className="Board1">
        <div className="Board2">
          <div className="Board3">
            <div className="Board4">
              <div className="Board5">
                <div className="Board6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
