import React from "react";
import { Container, Typography, List, ListItem, Button } from "@mui/material";

function Wishlist({ wishlist, setWishlist }) {
  const removeItem = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);
    setWishlist(updated);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Wishlist</Typography>
      {wishlist.length === 0 ? (
        <Typography>No items in wishlist.</Typography>
      ) : (
        <List>
          {wishlist.map((item, index) => (
            <ListItem key={index}>
              {item.name} — ₹{item.price}
              <Button sx={{ ml: 2 }} variant="outlined" onClick={() => removeItem(index)}>
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default Wishlist;