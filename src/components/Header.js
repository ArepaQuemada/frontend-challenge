import React from 'react';
import { Container, Box, makeStyles, TextField, InputAdornment, Grid, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import logo from '../assets/img/logo.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px'
    },
    boxContainer: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
    },
    boxNumber: {
        width: '19px',
        height: '19px',
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.light,
        fontSize: '10px'
    },
    menu: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    person: {
        verticalAlign: 'middle',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    textAccount: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    cartIcon: {
        [theme.breakpoints.up('md')]: {
            order: 2
        },
    },
    input: {
        [theme.breakpoints.up('md')]: {
            order: 1
        },
    },
    text: {
        fontSize: '13px',
    }
}));

export default function Header({ itemsCart }) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container alignItems="center">
                <Grid item xs={4} sm={1}>
                    <MenuIcon fontSize="large" className={classes.menu} />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <img src={logo} alt="logo.svg" />
                </Grid>
                <Grid item xs={4} sm={4} className={classes.cartIcon}>
                    <Box display="flex" justifyContent="center">
                        <Box className={classes.person}>
                            <PersonOutlineIcon />
                        </Box>
                        <Box className={classes.textAccount} display="flex" alignItems="center">
                            <Typography className={classes.text}>Minha Conta</Typography>
                        </Box>
                        <Box ml={3}>
                            <ShoppingCartIcon />
                        </Box>
                        <Box className={classes.boxNumber} display="flex" alignItems="center" justifyContent="center">
                            <Typography>{itemsCart}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} order={-1} className={classes.input}>
                    <TextField
                        fullWidth
                        label="O que está procurando?"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="large" />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
            </Grid>
        </Container>
    );
}