import React from "react";
import { Container, Typography, Button } from "@mui/material";

function Checkout({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    console.log("Order placed:", cartItems);
    // TODO: connect to backend order API
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Checkout</Typography>
      <Typography>Total: ₹{total}</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleCheckout}>
        Place Order
      </Button>
    </Container>
  );
}

export default Checkout;