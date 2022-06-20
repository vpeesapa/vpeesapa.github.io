import * as React from 'react';
import {
    Box,
    Typography,
    useMediaQuery
} from '@mui/material';
import portfolioImg from '../data/images/portfolio-img.jpg';

function Home(props) {

    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 30 : 50;

    return (
        <Box>
            <Box
                component="img"
                sx={{
                    height: 500,
                    width: 500,
                    maxHeight: {xs: 300,md: 400},
                    maxWidth: {xs: 300,md: 400},
                    borderRadius: '50%'
                }}
                alt="Portfolio image"
                src={portfolioImg}
            />
            <Box sx={{marginTop: 10}}>
                <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                    Hello there, explorer of the Internet!
                </Typography>
                <br />
                <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                    Welcome to Varun Peesapati's personal website!
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;