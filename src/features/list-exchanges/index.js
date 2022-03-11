import React, { useState, useEffect } from "react";
import { getExchanges } from "../../api/exchanges";
import Exchanges from "./exchanges";

function ExchangesView() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState("");
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoading(true);
        const { data } = await getExchanges(1);
        setPage(Number(1));
        setExchanges(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onPageChange = async currentPage => {
    try {
      if (currentPage > 0) {
        setError("");
        setLoading(true);
        setPage(currentPage);
        const { data } = await getExchanges(currentPage);
        setExchanges(data);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return <Exchanges exchanges={exchanges} onPageChange={onPageChange} loading={loading} page={page} error={error} />;
}

export default ExchangesView;
