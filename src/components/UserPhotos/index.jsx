import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Box,
  Link,
} from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
const fmt = (d) =>
  new Date(d).toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

function getPhotoSrc(fileName) {
  // dùng new URL là đúng, vẫn giữ nguyên
  return require("../../images/" + fileName);
}

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId) || [];

  if (!photos.length) {
    return <Typography>No photos for this user.</Typography>;
  }

  return (
    <div>
      <Typography variant="h5" sx={{ mb: 2 }}>
        All Photos
      </Typography>

      {photos.map((p) => (
        <Card key={p._id} sx={{ mb: 3 }}>
          <CardMedia
            component="img"
            image={getPhotoSrc(p.file_name)}
            alt={p.file_name}
          />
          <CardContent>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Taken: {fmt(p.date_time)}
            </Typography>

            {(p.comments || []).length ? (
              <Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Comments
                </Typography>

                {p.comments.map((c) => (
                  <Box key={c._id} sx={{ mb: 1.5 }}>
                    <Typography variant="caption" display="block">
                      {fmt(c.date_time)} —{" "}
                      <Link component={RouterLink} to={"/users/" + c.user._id}>
                        {c.user.first_name} {c.user.last_name}
                      </Link>
                    </Typography>
                    <Typography variant="body2">{c.comment}</Typography>
                    <Divider sx={{ mt: 1 }} />
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary">
                No comment
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;
