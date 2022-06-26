import * as React from 'react';
import {
    Box,
    Stack,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button,
    useMediaQuery
} from '@mui/material';
import {
    useParams,
    useNavigate
} from 'react-router-dom';
import {
    cards
} from '../../data/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';

function ProjectDetails(props) {
    // Get the index of the project from the parameter
    let projectIndex = useParams();

    let navigate = useNavigate();

    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 20 : 30;
    const smallerFontSize = matches ? 18: 28;
    const buttonSize = matches ? "small" : "medium";
    const infoVariant = matches ? "body2" : "h6";

    // Gets the appropriate project details from the 'database'
    const projectDetails = cards[projectIndex.id];
    
    React.useEffect(() => {
        // Scrolls to the top of the page whenever the component is mounted
        window.scrollTo(0,0);
    },[]);

    return (
        <Box>
            <Stack direction="column" sx={{display: 'flex'}}>
                <Button size={buttonSize} variant="contained" sx={{width: {xs: '10%',lg: '7%'},fontFamily: 'Play',backgroundColor: '#000000','&:hover': {backgroundColor: '#000000'}}} onClick={() => navigate("/portfolio")} startIcon={fontSize === 30 ? <ArrowBackIcon /> : null}>
                    {fontSize === 30 ? "Back" : <ArrowBackIcon />}
                </Button>
                <Typography sx={{mt: {xs: 1,sm: 0},justifyContent: 'center',alignItems: 'center',fontSize: {fontSize},fontFamily: 'Play',fontWeight: 'bold'}}>
                        {projectDetails.title}
                </Typography>
            </Stack>
            <Box
                component="img"
                sx={{
                    height: {xs: 150,sm: 250,md: 350,lg: 500},
                    width: {xs: 300,sm: 500,md: 600,lg: 800},
                    mt: {xs: 2,sm: 2}
                }}
                alt={projectDetails.title}
                src={projectDetails.thumbnail}
            />
            <Typography variant="h5" sx={{pt: {xs: 3,sm: 7},fontSize: {fontSize},fontFamily: 'Play'}}>
                {projectDetails.description}
            </Typography>
            <br />
            {
                projectDetails.link !== "" ? (
                    <>
                        <Typography variant="body1" sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                            <a href={projectDetails.link}>Link to project</a>
                        </Typography>
                        <br />
                    </>
                ) : null
            }
            {
                projectDetails.info.length !== 0 ? (
                    <Typography variant="h6" sx={{fontWeight: 'bold',fontSize: {fontSize},fontFamily: 'Play'}}>
                        About the project
                    </Typography>
                ) : null
            }
            <List>
                {
                    projectDetails.info.map((point) => (
                        <ListItem sx={{textAlign: 'justify'}}>
                            {
                                !matches ? (
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                ) : null
                            }
                            <ListItemText
                                primary={
                                    <Typography
                                        variant={infoVariant}
                                        sx={{
                                            fontSize: {smallerFontSize},
                                            fontFamily: 'Play'
                                        }}
                                    >
                                        {point}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default ProjectDetails;