import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Paper,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import { columns } from "../../constants/features/list-exchanges/table";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin: 0 30px;
`;

const StyledTypography = styled(Typography)`
  display: inline-block;
  margin-top: 3px;
`;

const StyledTableCellHeader = styled(TableCell)`
  background-color: #eee;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #b3b7bd;
`;

const Img = styled("img")`
  height: 20px;
`;

const StyledTableCell = styled(TableCell)`
  :hover {
    cursor: pointer;
  }
`;

const ArrowBack = styled(ArrowBackIosIcon)`
  height: 10px;
`;

const ArrowForward = styled(ArrowForwardIosIcon)`
  height: 10px;
`;

function DataTable({ exchanges, onPageChange, page }) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <StyledTableCellHeader key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </StyledTableCellHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {exchanges.map(exchange => {
              const { id, name, url, country, image, trust_score } = exchange;
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                  <TableCell data-cy="name">{name}</TableCell>
                  <TableCell>{country}</TableCell>
                  <TableCell>
                    <Img src={image} alt="Logo" />
                  </TableCell>
                  <TableCell>
                    <StyledLink to={url}>{name}</StyledLink>
                  </TableCell>
                  <TableCell>{trust_score}</TableCell>
                  <StyledTableCell>
                    <VisibilityIcon />
                  </StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledBox>
        <IconButton>
          <ArrowBack onClick={() => onPageChange(page - 1)} />
        </IconButton>

        <StyledTypography data-cy="page">{page}</StyledTypography>
        <IconButton>
          <ArrowForward onClick={() => onPageChange(page + 1)} data-cy="next-page" />
        </IconButton>
      </StyledBox>
    </Paper>
  );
}

export default DataTable;
