import React from 'react';
import { Container, Typography, makeStyles, Box } from '@material-ui/core';
import ItemCard from './ItemCard';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import useFetch from '../utils/useFetch';
import 'react-awesome-slider/dist/captioned.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px'
    },
    background: {
        backgroundColor: '#FFFFFF'
    },
    bullets: {
        marginTop: '55px'
    },
}));

export default function TopSell() {
    const classes = useStyles();
    const URL = 'https://corebiz-test.herokuapp.com/api/v1/products';
    const response = useFetch(URL);
    const { data } = response || {};
    console.log(data);

    return (
        <Container className={classes.root} maxWidth="md">
            <Typography variant="h5">
                Mais Vendidos
                </Typography>
            <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
                {(data || []).map((product, index) => {
                    return (
                        <ItemCard
                            item={product}
                            key={index}
                        />

                    )
                })}
            </Box>
        </Container>
    );
}