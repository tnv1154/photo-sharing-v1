import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography variant="h6" style={{ marginBottom: 8 }}>
        Users
      </Typography>

      <List component="nav">
        {users.map((u) => (
          <React.Fragment key={u._id}>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/users/" + u._id}>
                <ListItemText primary={u.first_name + " " + u.last_name} />
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;
