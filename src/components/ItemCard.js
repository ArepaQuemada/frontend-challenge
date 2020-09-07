import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { ItemsCartContext } from '../App';
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
    root: {
        width: '200px',
        height: '390px',
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
        fontSize: '12px',
        textDecoration: 'line-through'
    },
    quantity: {
        fontSize: '11px'
    },
    productName: {  
        fontSize: '12px',
    },
    hideElement: {
        visibility: 'hidden'
    },
    content: {
        padding: 0
    }
}));

export default function ItemCard({ item }) {
    const classes = useStyles();
    const [ itemsCart, updateItemsCart ] = useContext(ItemsCartContext);
    const { imageUrl, installments: [{ quantity, value } = {}], listPrice, price, productName, stars } = item
    const starsArr = [ 1, 2, 3, 4, 5 ];

    const handleClick = () => {
        updateItemsCart(itemsCart + 1);
    }

    const parseCurrency = (number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0
        }).format(number);
    }

    const parsedListPrice = listPrice ? parseCurrency(listPrice) : null
    const parsedValue =  value ? parseCurrency(value) : null;
    const parsedPrice = price ? parseCurrency(price) : null;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imageUrl} />
            <CardContent className={classes.content}>
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
                <Typography className={`${classes.listPrice} ${parsedListPrice ? '' : classes.hideElement}`}>
                    {listPrice ? `de R$ ${parsedListPrice}` : `No list price`}
                </Typography>
                <Typography>
                    por {parsedPrice}
                </Typography>
                <Typography className={`${classes.quantity} ${parsedValue ? '' : classes.hideElement}`}>
                    {parsedValue ? `ou em ${quantity}x de ${parsedValue}` : 'No value'}
                </Typography>

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