import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DataTable from "../../components/table";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 10px 0 20px 0;
`;

const Exchanges = ({ exchanges, page, onPageChange, error, loading }) => (
  <Container fixed data-cy="exchanges">
    <StyledBox>
      <Typography variant="h2">
        <em>Stake Gekko</em>
      </Typography>
    </StyledBox>
    <StyledBox>
      <Typography variant="h4">Checkout our amazing Exchange</Typography>
    </StyledBox>

    <DataTable onPageChange={onPageChange} page={page} exchanges={exchanges} error={error} loading={loading} />
  </Container>
);

export default Exchanges;
