import React from 'react';
import { makeStyles, Container, Box, Typography, Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import vtexSm from '../assets/img/vtex-sm.svg';
import logoSm from '../assets/img/logo-sm.svg';
import EmailIcon from '@material-ui/icons/Email';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        color: '#FFFFFF'
    }, 
    wrapper: {
        padding: '25px'
    },
    bar: {
        height: '10px',
        width: '80px',
        backgroundColor: '#FFFFFF'
    },
    buttonContainer: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30%'
        }
    },
    button: {
        marginTop: '10px',
        padding: '10px'
    },
    txtButton: {
        lineHeight: 1,
        fontWeight: 'bold'
    },
    creditsBox: {
        height: '100%'
    },
    smText: {
        fontSize: '10px',
    }
}));

const theme = createMuiTheme(({
    palette: {
        primary: {
            main: '#FFFFFF'
        }
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Container className={classes.root} disableGutters maxWidth>
            <Box display="flex" className={classes.wrapper} flexWrap="wrap" justifyContent="centerx">
                <Box display="flex" flexDirection="column" m={4}>
                    <Typography variant="h5">
                        Localização
                    </Typography>
                    <Box className={classes.bar} />
                    <Typography>
                        Avenida Andrômeda, 2000. Bloco 6 e 8 
                    </Typography>
                    <Typography>
                        Alphavile SP                
                    </Typography>                
                    <Typography>
                        brasil@corebiz.ag
                    </Typography>
                    <Typography>
                        +55 11 3090 1039
                    </Typography>
                </Box>
                <Box className={classes.buttonContainer} display="flex" flexDirection="column" m={4} justifyContent="center" alignItems="center">
                    <ThemeProvider theme={theme}>
                        <Button 
                            color="primary" 
                            variant="contained" 
                            size="large" 
                            className={classes.button}
                            startIcon={<EmailIcon />}>
                            <Typography className={classes.txtButton}>EMTRE EM CONTATO</Typography>
                        </Button>
                        <Button 
                            color="primary" 
                            variant="contained" 
                            size="large" 
                            className={classes.button}
                            startIcon={<HeadsetMicIcon />}>
                            <Box display="flex" flexDirection="column">
                                <Typography className={classes.txtButton}>FALE COM O NOSSO</Typography>
                                <Typography className={classes.txtButton}>CONSULTOR ONLINE</Typography>        
                            </Box>
                        </Button>
                    </ThemeProvider>
                </Box>
                <Box className={classes.buttonContainer} display="flex" justifyContent="space-evenly">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                        <Typography className={classes.smText}>Created by</Typography>
                        <img src={logoSm} alt="logo-small"/>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center">
                        <Typography className={classes.smText}>Powered by</Typography>
                        <img src={vtexSm} alt="vtex-small"/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
