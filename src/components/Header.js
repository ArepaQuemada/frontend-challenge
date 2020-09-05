import React from 'react';
import { Container, Box, makeStyles, TextField, InputAdornment, Grid } from '@material-ui/core';
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
        borderRadius: '50%',
        width: '17px',
        height: '17px',
        textAlign: 'center',
        backgroundColor: '#F8475F',
        color: '#FFFFFF',
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
        lineHeight: '18px'
    }
}));

export default function Header() {
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
                            <span className={classes.text}>Minha Conta</span>
                        </Box>
                        <ShoppingCartIcon />
                        <Box className={classes.boxNumber}>
                            <span>1</span>
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