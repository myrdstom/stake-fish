import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { getExchange } from "../../api/exchanges";
import ExchangeDetails from "./ExchangeDetails";
import CustomButton from "../../components/button";
import { section, pathname } from "../../constants/features/exchange-details/exchange-details";

function ExchangeDetailsView() {
  const { exchangeId } = useParams();
  const [exchangeDetails, setExchangeDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState("");
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoading(true);
        const { data } = await getExchange(exchangeId);
        setExchangeDetails(data);
      } catch (e) {
        setError(e.message);
        console.warn(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container fixed>
      <CustomButton pathname={pathname} section={section} />
      {loading ? <>Loading....</> : <ExchangeDetails exchangeDetails={exchangeDetails} />}
    </Container>
  );
}

export default ExchangeDetailsView;
