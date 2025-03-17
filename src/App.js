import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Main from "./page/main";
import Sub from "./page/sub";
import Detail from "./page/detail";
import ScrollToTop from "./assets/js/ScrollToTop";

import "./css/App.css";
import "./css/common.css"
import "./css/sub.css"

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sub" element={<Sub />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
