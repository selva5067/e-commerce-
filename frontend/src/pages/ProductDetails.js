import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";

function ProductDetails({ setCartItems }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{product.name}</Typography>
      <Typography>{product.description}</Typography>
      <Typography variant="h6">₹{product.price}</Typography>
      <Typography>Category: {product.category}</Typography>
      <Typography>Stock: {product.stock}</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => setCartItems(prev => [...prev, product])}>
        Add to Cart
      </Button>
    
    </Container>
  );
}

export default ProductDetails;