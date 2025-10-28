import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  // Match các route có userId
  const userMatch = matchPath("/users/:userId", location.pathname);
  const photosMatch = matchPath("/photos/:userId", location.pathname);

  let rightText = "";

  if (photosMatch?.params?.userId) {
    const u = models.userModel(photosMatch.params.userId);
    if (u) rightText = `Photos of ${u.first_name} ${u.last_name}`;
  } else if (userMatch?.params?.userId) {
    const u = models.userModel(userMatch.params.userId);
    if (u) rightText = `${u.first_name} ${u.last_name}`;
  } else if (location.pathname === "/users") {
    rightText = "Users";
  } else {
    rightText = ""; // trang khác (fallback)
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Nguyễn Việt Thắng
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="subtitle1" color="inherit">
          {rightText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
