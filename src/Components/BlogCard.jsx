import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BlogCard({ Image, Content, Topic }) {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }} className="mb-5 blog-card">
        <CardMedia
          component="img"
          height="250"
          image={Image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
