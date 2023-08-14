import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BlogCard({ Image, Content, Topic, Share, LearnMore }) {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }} className="mb-5 blog-card">
        <CardMedia component="img" height="250" image={Image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={Share} rel="noreferrer" className="text-decoration-none">
              Share
            </a>
          </Button>
          <Button size="small">
            <a
              href={LearnMore}
              rel="noreferrer"
              className="text-decoration-none"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
