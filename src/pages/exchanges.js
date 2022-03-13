import React from "react";
import { Route, Routes } from "react-router-dom";
import ExchangesView from "../features/list-exchanges";

function ExchangesPages() {
  return (
    <Routes>
      <Route path="/" element={<ExchangesView />} />
    </Routes>
  );
}

export default ExchangesPages;
