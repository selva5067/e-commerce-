import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My E-Commerce
        </Typography>
        <form onSubmit={handleSearch}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ bgcolor: "white", borderRadius: 1, mr: 2 }}
          />
        </form>
        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
        <Button color="inherit" onClick={() => navigate("/cart")}>Cart</Button>
        <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
        <Button color="inherit" onClick={() => navigate("/signup")}>Signup</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;