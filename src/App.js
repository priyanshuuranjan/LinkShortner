import Home from "./Home";
import Link from "./Link";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/l/:code" component={Link} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
