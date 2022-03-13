import React from "react";
import { Routes, Route } from "react-router-dom";

import ExchangesPages from "./pages/exchanges";

const App = () => (
  <Routes>
    <Route path="/*" element={<ExchangesPages />} />
  </Routes>
);

export default App;
