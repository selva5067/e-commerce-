import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <Typography>Please login to view profile.</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Profile</Typography>
      <Typography>Name: {user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      {/* TODO: Fetch and display past orders */}
    </Container>
  );
}

export default Profile;