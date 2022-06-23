import * as React from 'react';
import {
    Box,
    Stack,
    Typography,
    Divider,
    useMediaQuery
} from '@mui/material';
import USCLogo from '../../data/images/usc-logo.png';
import UCDLogo from '../../data/images/uc-davis-logo.png';
import {
    favorites
} from '../../data/constants';

function Description(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 15 : 25;
    const subHeadingsFontSize = matches ? 20 : 30;

    return (
        <Box sx={{mt: 2}}>
            <Typography variant="h5" sx={{pb: 1,fontWeight: 'bold',fontSize: {subHeadingsFontSize},fontFamily: 'Play'}}>
                My Aim
            </Typography>
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                I'm a dedicated and passionate game developer hoping to show the world my love for narrative-driven games.
            </Typography>
            <br />
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                I am a strong believer that games are intricately woven works of art and technology, and it is at these crossroads that the best games are made.
            </Typography>
            <br />
            <Typography sx={{pb: 3,fontSize: {fontSize},fontFamily: 'Play'}}>
                As such, I wish to develop games that can deliver an out-of-the-box experience to the players by smartly combining technology with equally engaging stories.
            </Typography>
            <Divider />
            <Typography variant="h5" sx={{pt: 3,pb: 1,fontWeight: 'bold',fontSize: {subHeadingsFontSize},fontFamily: 'Play'}}>
                Education
            </Typography>
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                I am currently pursuing my Master's degree in Computer Science (Game Development) at the University of Southern California.
            </Typography>
            <br />
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                I completed my Bachelor's degree in Computer Science & Engineering from the University of California, Davis along with a minor in Mathematics.
            </Typography>
            <Stack direction="row" sx={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
                <a href="https://www.usc.edu">
                    <Box
                        component="img"
                        sx={{
                            height: {xs: 100,sm: 170,md: 260},
                            width: {xs: 220,sm: 370,md: 600},
                            p: {xs: "0px 3px 0px 3px",sm: "0px 3px 0px 3px",md: 2}
                        }}
                        alt="USC Logo"
                        src={USCLogo}
                    />
                </a>
                <a href="https://www.ucdavis.edu">
                    <Box
                        component="img"
                        sx={{
                            height: {xs: 45,sm: 65,md: 125},
                            width: {xs: 200,sm: 350,md: 600},
                            p: {xs: "0px 3px 3px 3px",sm: "0px 3px 3px 3px",md: "80px 12px 3px 3px"}
                        }}
                        alt="UC Davis Logo"
                        src={UCDLogo}
                    />
                </a>
            </Stack>
            <Divider sx={{pt: 3}}/>
            <Typography variant="h5" sx={{pt: 3,pb: 1,fontWeight: 'bold',fontSize: {subHeadingsFontSize},fontFamily: 'Play'}}>
                Hobbies
            </Typography>
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                Besides video games (obviously), I also enjoy reading and writing.
            </Typography>
            <br />
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                Some of my favorite books include <b>Blood, Sweat, and Pixels</b> by <b>Jason Schrier</b>, <b>Steel Ball Run</b> by <b>Hirohiko Araki</b>, and <b>Vinland Saga</b> by <b>Makoto Yukimura</b>.
            </Typography>
            <br />
            <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                My favorite video games include <b>NieR:Automata</b> and <b>Undertale</b>.
            </Typography>
            <Stack direction="row" sx={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
                {
                    favorites.map((favorite) => (
                        <Box
                            component="img"
                            sx={{
                                height: {xs: 100,sm: 175,md: 320},
                                width: {xs: 65,sm: 140,md: 270},
                                p: {xs: "5px 3px 3px 3px",sm: "5px 5px 5px 5px",md: "20px 20px 3px 3px"}
                            }}
                            alt={favorite.title}
                            src={favorite.image}
                        />
                    ))
                }
            </Stack>
        </Box>
    );
}

export default Description;