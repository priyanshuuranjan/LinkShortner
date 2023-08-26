import Home from "./Components/Home";
import { Route, BrowserRoute as router, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
