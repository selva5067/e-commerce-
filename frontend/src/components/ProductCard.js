import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ minHeight: 220, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
          ₹{product.price}
        </Typography>
        <Typography variant="caption" display="block">
          Category: {product.category}
        </Typography>
        <Typography variant="caption" display="block">
          Stock: {product.stock}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;