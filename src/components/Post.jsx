import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const Post = ({ post }) => (
    <Card>
        <CardMedia
            component="img"
            alt={post.caption}
            height="140"
            image={post.imageUrl}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {post.caption}
            </Typography>
        </CardContent>
    </Card>
);

export default Post;
