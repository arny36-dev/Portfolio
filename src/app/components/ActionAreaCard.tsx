import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";

interface CardDetails {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export default function ActionAreaCard({
  image,
  alt,
  title,
  description,
  link,
}: CardDetails) {
  return (
    <Card
      sx={{
        maxWidth: 360,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href={link} passHref legacyBehavior>
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={alt}
            sx={{
              height: 200,
              width: "100%",
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              flexGrow: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
