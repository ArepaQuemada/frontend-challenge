import React, { useState } from 'react';
import { Container, Typography, makeStyles, useMediaQuery, CircularProgress, Backdrop } from '@material-ui/core';
import ItemCard from './ItemCard';
import useFetch from '../utils/useFetch';
import 'react-awesome-slider/dist/captioned.css';
import "@techychan/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from '@techychan/react-responsive-carousel';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px'
    },
    background: {
        backgroundColor: '#FFFFFF'
    },
    carouselContainer: {
        display: 'flex',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

export default function TopSell() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const URL = 'https://corebiz-test.herokuapp.com/api/v1/products';
    const response = useFetch(URL, setLoading);
    const { data = [] } = response || {};
    const isMobile = useMediaQuery('(max-width:960px)');

    const parseData = (data, split) => {
        let interval = 0;
        let arr = [];
        let result = [];
        data.forEach((elem) => {
            arr.push(elem);
            interval++;
            if (interval === split) {
                interval = 0;
                result.push({ array: arr });
                arr = [];
            }
        });
        return result;
    }

    const parsedItems = isMobile ? parseData(data, 2) : parseData(data, 4);

    if (loading) {
        return (
            <Backdrop open={loading} className={classes.backdrop}>
                <CircularProgress color="secondary" />
            </Backdrop>
        );
    }

    return (
        <Container className={classes.root} maxWidth="md">
            <Typography variant="h5">
                Mais Vendidos
            </Typography>
            <Carousel showStatus={false}>
                {parsedItems.map((items, index) => {
                    return (
                        <div className={classes.carouselContainer}>
                            {items.array.map((product, index) => {
                                return (
                                    <ItemCard
                                        item={product}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </Carousel>
        </Container>
    );
}