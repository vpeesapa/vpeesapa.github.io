import * as React from 'react';
import {
    Box,
    Stack,
    Typography,
    Divider,
    useMediaQuery
} from '@mui/material';
import {
    Link
} from 'react-router-dom';
import portfolioImg from '../../data/images/portfolio-img.jpg';
import {
    cards
} from '../../data/constants';

function Home(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 30 : 50;

    let filteredProjects = cards.filter((project,index) => index < 3);

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
            <Box sx={{marginTop: 5}}>
                <Typography sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                    Hello there, explorer on the Internet!
                </Typography>
                <br />
                <Typography sx={{pb: {xs: 3,sm: 3},fontSize: {fontSize},fontFamily: 'Play'}}>
                    Welcome to Varun Peesapati's personal website!
                </Typography>
                <Divider />
                <Box>
                    <Typography sx={{p: {xs: 3,sm: 3},fontSize: {fontSize},fontFamily: 'Play'}}>
                        To check out all the projects that I've worked on, click <Link to="/portfolio">here</Link>.
                    </Typography>
                    <Stack direction="row" sx={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
                        {
                            filteredProjects.map((project) => (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 250,
                                        width: 300,
                                        maxHeight: {xs: 300,md: 400},
                                        maxWidth: {xs: 300,md: 400},
                                        p: {xs: 3,sm: 3},
                                        borderRadius: '15%'
                                    }}
                                    alt={project.title}
                                    src={project.thumbnail}
                                />
                            ))
                        }
                    </Stack>
                </Box>
                <Divider />
                <Typography sx={{p: {xs: 3,sm: 3},fontSize: {fontSize},fontFamily: 'Play'}}>
                    To learn more about me, click <Link to="/about">here</Link>.
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;