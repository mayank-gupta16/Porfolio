import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function BlogCard({
  Image,
  DateTime,
  Topic,
  uniqueIdentifier,
  Summary,
}) {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }} className="mb-5 blog-card">
        <CardMedia component="img" height="250" image={Image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Topic}
          </Typography>
          <Typography variant="body3" color="text.primary">
            {Summary}
          </Typography>
          <Typography variant="body2" color="gray" className="mt-3">
            {"\u2B24 "}
            {" " + DateTime}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <NavLink
              to={"/Blog/" + uniqueIdentifier}
              rel="noreferrer"
              className="text-decoration-none"
            >
              Visit Blog
            </NavLink>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
