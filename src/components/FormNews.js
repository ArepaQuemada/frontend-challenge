import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, Button, makeStyles, useMediaQuery } from '@material-ui/core';
import validator from 'email-validator';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        padding: '30px',
    },
    boxItem: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    boxContainer: {
        [theme.breakpoints.up('md')]: {
            textAlign: 'center'
        }
    },
    buttonContainer: {
        [theme.breakpoints.up('md')]: {
            marginBottom: '20px'
        }
    },
    button: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            opacity: '0.7'
        }
    }
}));

export default function FormNews() {
    const classes = useStyles();
    const isFull = useMediaQuery('(max-width:960px)');
    const [errorName, setErrorName] = useState(null);
    const [errorMail, setErrorMail] = useState(null);

    useEffect(() => {
        setErrorName(false)
        setErrorMail(false);
    }, []);

    const handleChangeName = (e) => {
        const hasError = e.target.value ? false : true;
        setErrorName(hasError);
    }

    const handleChangeEmail = (e) => {
        const hasError = !validator.validate(e.target.value);
        setErrorMail(hasError);
    }
    return (
        <Container className={classes.root}>
            <Box className={classes.boxContainer}>
                <Typography variant="h6">
                    Participe de nossas news com promoções e novidades!
                </Typography>
                <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
                    <Box className={classes.boxItem}>
                        <TextField
                            label="Digite seu nome"
                            variant="outlined"
                            type="text"
                            fullWidth={isFull}
                            error={errorName}
                            onChange={handleChangeName}
                            helperText="Preencha com seu nome completo" />
                    </Box>
                    <Box className={classes.boxItem}>
                        <TextField
                            label="Digite seu email"
                            variant="outlined"
                            type="email"
                            fullWidth={isFull}
                            error={errorMail}
                            onChange={handleChangeEmail}
                            helperText="Preencha com um e-mail válido" />
                    </Box>
                    <Box className={`${classes.boxItem} ${classes.buttonContainer}`}>
                        <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                fullWidth={isFull}
                                size="large"
                                disabled={errorName || errorMail}>
                                Eu quero!
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}