import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./components/Game/Game";
import StartGame from "./components/StartGame/StartGame";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
