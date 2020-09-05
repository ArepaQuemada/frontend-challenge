import React, { useState, useEffect } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px'
    }
}))

export default function TopSell() {
    const classes = useStyles();
    useEffect(() => {
        console.log('first render');
    }, [])
    return (
        <Container className={classes.root}>
            <Typography variant="h5">
                Mais Vendidos
            </Typography>
        </Container>
    );
}