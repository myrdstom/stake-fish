import React from "react";
import { Route, Routes } from "react-router-dom";
import ExchangesView from "../features/list-exchanges";
import ExchangeDetailsView from "../features/exchange-details";

function ExchangesPages() {
  return (
    <Routes>
      <Route path="/" element={<ExchangesView />} />
      <Route path="/:exchangeId" element={<ExchangeDetailsView />} />
    </Routes>
  );
}

export default ExchangesPages;
