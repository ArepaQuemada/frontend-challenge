import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, Button, makeStyles, useMediaQuery } from '@material-ui/core';
import validator from 'email-validator';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#F2F2F2',
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
    }
}));

export default function FormNews() {
    const classes = useStyles();
    const isFull = useMediaQuery('(max-width:960px)');
    const [ errorName, setErrorName ] = useState(null);
    const [ errorMail, setErrorMail ] = useState(null);

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
                            helperText="Preencha com seu nome completo"/>
                    </Box>
                    <Box className={classes.boxItem}>
                        <TextField 
                            label="Digite seu email" 
                            variant="outlined" 
                            type="email" 
                            fullWidth={isFull}
                            error={errorMail} 
                            onChange={handleChangeEmail} 
                            helperText="Preencha com um e-mail válido"/>
                    </Box>
                    <Box className={classes.boxItem}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth={isFull} 
                            disabled={errorName || errorMail}>
                        Eu quero!
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}