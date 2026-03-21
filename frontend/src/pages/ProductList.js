import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Container, Typography, Button } from "@mui/material";
import ProductCard from "../components/ProductCard";

function ProductList({ searchQuery, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Product List</Typography>
      <Grid container spacing={3}>
        {filtered.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p._id}>
            <ProductCard product={p} />
            <Button variant="contained" sx={{ mt: 1 }} onClick={() => addToCart(p)}>
              Add to Cart
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductList;