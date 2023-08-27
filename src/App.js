import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './Components/BackgroundAnimate';
import InputShortener from './Components/InputShortener';
import LinkResult from './Components/LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;






















// import Home from "./Home";
// import Link from "./Link";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/l/:code" component={Link} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
