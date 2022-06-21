import * as React from 'react';
import {
    Box,
    Typography,
    useMediaQuery
} from '@mui/material';
import {
    Link
} from 'react-router-dom';
import portfolioImg from '../../data/images/portfolio-img.jpg';

function Home(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 30 : 50;

    React.useEffect(() => {
        // Scrolls to the top of the page whenever the component is mounted
        window.scrollTo(0,0);
    },[]);

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
                    Hello there, explorer on the Internet!
                </Typography>
                <br />
                <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                    Welcome to Varun Peesapati's personal website!
                </Typography>
                <br />
                <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                    To learn more about me, click <Link to="/about">here</Link>.
                </Typography>
                <br />
                <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                    For my portfolio, click <Link to="/portfolio">here</Link>.
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;