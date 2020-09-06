import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { ItemsCartContext } from '../App';
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
    root: {
        width: '160px',
        flexGrow: 1,
        padding: '20px',
        borderRadius: '0%',
        border: 'none',
        boxShadow: 'none'
    },
    media: {
        height: '135px',
    }
}))

export default function ItemCard({ item }) {
    const classes = useStyles();
    const [itemsCart, updateItemsCart] = useContext(ItemsCartContext);
    const { imageUrl, installments: [{ quantity, value } = {}], listPrice, price, productId, productName, stars } = item
    const starsArr = [1, 2, 3, 4, 5];

    const handleClick = () => {
        updateItemsCart(itemsCart + 1);
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageUrl} />
            <CardContent>
                <Typography variant="caption">
                    {productName}
                </Typography>
                <Box>
                    {starsArr.map((element, index) => {
                        if (index < stars) {
                            return (
                                <StarIcon color="secondary" fontSize="small"/>
                            )
                        }
                        return (
                            <StarBorder color="secondary" fontSize="small"/>
                        ) 
                    })}
                </Box>
                <Typography>
                    por R$ {price}
                </Typography>
                <Typography>
                    ou em {quantity}x de R$ 28,87
                    </Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    COMPRAR
                </Button>
            </CardContent>
        </Card>
    )
}