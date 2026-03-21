import React, { useEffect, useState, useContext } from "react";
import { Container, Typography, List, ListItem, Button } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:5000/api/cart", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setCartItems(res.data))
      .catch(err => console.error("Error fetching cart:", err));
    }
  }, [token]);

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/cart/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in cart.</Typography>
      ) : (
        <List>
          {cartItems.map(item => (
            <ListItem key={item._id}>
              {item.name} — ₹{item.price}
              <Button sx={{ ml: 2 }} variant="outlined" onClick={() => removeItem(item._id)}>Remove</Button>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Cart;