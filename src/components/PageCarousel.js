import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import mobileBanner from '../assets/img/mobile-banner.jpg';
import desktopBanner from '../assets/img/desktop-banner.jpg';
import { makeStyles, useMediaQuery, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 5,
        color: '#FFFFFF',
        padding: '20px',
    },
    image: {
        opacity: '0.55'
    }
}))

export default function PageCarousel() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:960px)');
    const banner = matches ? desktopBanner : mobileBanner;

    const slider = (
        <AwesomeSlider>
            <div className='awssld__content'>
                <div className={classes.root} >
                    <Typography variant="h5">
                        Olá, o que você está buscando?
                    </Typography>
                    <Typography variant="h4">
                        Criar ou migrar seu e-commerce?
                    </Typography>
                </div>
                <img src={banner} className={classes.image} alt="banner.jpg"/>
            </div>
            <div>2</div>
            <div>3</div>
        </AwesomeSlider>
    );
    return (
        <>
            {slider}
        </>
    )
}