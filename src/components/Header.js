import React from 'react';
import { Container, Box, makeStyles, TextField, InputAdornment } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import logo from '../assets/img/logo.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px',
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
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    inputBox: {
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box display="flex" className={classes.boxContainer}>
                <Box display="flex">
                    <Box display="flex" alignContent="flex-end">
                        <MenuIcon fontSize="large" className={classes.menu} />
                    </Box>
                    <Box flexGrow={1} display="flex" justifyContent="center">
                        <img src={logo} alt="logo.svg" />
                    </Box>
                    <Box display="flex" alignContent="flex-end" alignItems="center">
                        <PersonOutlineIcon />
                        <span>Minha Conta</span>
                    <ShoppingCartIcon />
                        <Box className={classes.boxNumber}>
                            <span>1</span>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.inputBox}>
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
                </Box>
            </Box>
        </Container>
    );
}