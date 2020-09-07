import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { ItemsCartContext } from '../App';
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
    root: {
        width: '200px',
        flexGrow: 1,
        borderRadius: '0%',
        border: 'none',
        boxShadow: 'none',
        [theme.breakpoints.up('md')]: {
            padding: '20px'
        }
    },
    media: {
        height: '135px',
    },
    price: {
        fontWeight: "bolder",
        fontSize: '18px'
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            opacity: '0.8',
        },
    },
    listPrice: {
        textDecoration: 'line-through'
    },
    space: {
        marginTop: '24px'
    },
    quantity: {
        fontSize: '11px'
    },
    productName: {
        fontSize: '12px'
    }
}));

export default function ItemCard({ item }) {
    console.log(item);
    const classes = useStyles();
    const [ itemsCart, updateItemsCart ] = useContext(ItemsCartContext);
    const { imageUrl, installments: [{ quantity, value } = {}], listPrice, price, productName, stars } = item
    const starsArr = [ 1, 2, 3, 4, 5 ];

    const handleClick = () => {
        updateItemsCart(itemsCart + 1);
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageUrl} />
            <CardContent>
                <Typography className={classes.productName}>
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
                <Typography className={classes.listPrice}>
                    {listPrice ? `de R$ ${listPrice}` : <div className={classes.space}></div>}
                </Typography>
                <Typography className={classes.price}>
                    por R$ {price}
                </Typography>
                {quantity || value ?  
                <Typography className={classes.quantity}>
                    ou em {quantity}x de R$ {value}
                </Typography> : <div></div>}

                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleClick} 
                    className={classes.button}>
                        COMPRAR
                </Button>
            </CardContent>
        </Card>
    );
}