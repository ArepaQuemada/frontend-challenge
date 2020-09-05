import React from 'react';
import { Card, CardMedia, CardActionArea, CardContent, Box, Typography, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '160px',
    },
    media: {
        height: '100px'
    }
}))

export default function ItemCard({ item }) {
    const classes = useStyles();
    console.log(item);
    const { imageUrl, installments: [{ quantity, value } = {}], listPrice, price, productId, productName, stars } = item
    return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                />
                <CardContent>
                    <Typography variant="caption">
                        {productName}
                    </Typography>
                    <Box>
                        {stars}
                    </Box>
                    <Typography>
                        por R$ {price}
                    </Typography>
                    <Typography>
                        ou em {quantity}x de R$ 28,87
                    </Typography>
                    <Button variant="contained" color="primary">
                        COMPRAR
                    </Button>
                </CardContent>
            </Card>
    )
}