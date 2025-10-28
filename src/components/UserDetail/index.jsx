import React from "react";
import { Typography, Divider, Link, Box } from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { useParams, Link as RouterLink } from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const u = models.userModel(userId);

  if (!u) {
    return <Typography>User not found</Typography>;
  }
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1 }}>
        {u.first_name} {u.last_name}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="body1">
        <b>Location:</b>
        {u.location}
      </Typography>

      <Typography variant="body1">
        <b>Occupation:</b>
        {u.occupation}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <b>Description:</b>{" "}
        <span dangerouslySetInnerHTML={{ __html: u.description }} />
      </Typography>

      <Link component={RouterLink} to={"/photos/" + u._id}>
        Photos of {u.first_name} {u.last_name}
      </Link>
    </Box>
  );
}

export default UserDetail;
