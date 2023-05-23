import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "../pages/game";
import Start from "../pages/start";

export default function FCRouter() {

    return <>
          <Router>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/game" element={<Game />}></Route>
          </Routes>
        </Router>
      </>
}