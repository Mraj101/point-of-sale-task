import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const SampleData = [
  { sl: 1, product: "Product 1", quantity: 10 },
  { sl: 2, product: "Product 2", quantity: 15 },
  { sl: 3, product: "Product 3", quantity: 20 },
  // Add more sample data as needed
];

const StockItems = () => {
  return (
    <div style={{ position: "relative" }}>
     <Link to={`/add`}>
     <Button
        variant="contained"
        color="primary"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      >
        Add Product
      </Button></Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SL</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleData.map((data, idx) => (
              <TableRow key={data.sl}>
                <TableCell>{idx +1}</TableCell>
                <TableCell>{data.product}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>
                  {/* Replace this with your edit functionality */}
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  {/* Replace this with your delete functionality */}
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StockItems;
