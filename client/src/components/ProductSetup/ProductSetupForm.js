import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to add the product data to the table here
    console.log("Product Name:", productName);
    console.log("Quantity:", quantity);
  };

  return (
    <div>
      <h1>Add Product Form</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              value={productName}
              onChange={handleProductNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Quantity"
              variant="outlined"
              fullWidth
              value={quantity}
              onChange={handleQuantityChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProductForm;
