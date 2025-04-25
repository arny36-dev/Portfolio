import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';

interface CardDetails {
  image: string;
  alt: string;
  title: string;
  description: string;
  link:string;
}
export default function ActionAreaCard({image, alt, title, description, link}: CardDetails) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={link} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
