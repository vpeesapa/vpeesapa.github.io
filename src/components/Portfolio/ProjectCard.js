import * as React from 'react';
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    useNavigate
} from 'react-router-dom';

function ProjectCard(props) {
    const {data,fontSize,subtitleFontSize,subtitleVariant} = props;

    let navigate = useNavigate();

    return (
        <Box sx={{p: {xs: "10px 10px 10px 10px",sm: "10px 10px 10px 6px"},display: 'flex',flexWrap: 'inherit',justifyContent: 'center'}} key={data.title}>
            <Card sx={{position: 'relative',width: {xs: 275,sm: 350,md: 400},height: {xs: 350,sm: 350,md: 400}}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.thumbnail}
                    alt={data.title}
                    sx={{objectFit: data.objectFit}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                        {data.title}
                    </Typography>
                    <Typography variant={subtitleVariant} color="text.secondary" sx={{fontSize: {subtitleFontSize},fontFamily: 'Play'}}>
                        {data.description}
                    </Typography>
                </CardContent>
                    <CardActions sx={{position: 'absolute',right: 5,top: {xs: 300,sm: 300,md: 345}}}>
                        <Button onClick={() => navigate("/portfolio/" + data.id)} size="small" variant="contained" sx={{fontFamily: 'Play',backgroundColor: '#000000','&:hover': {backgroundColor: '#000000'}}}>
                            <ArrowForwardIcon />
                        </Button>
                    </CardActions>
            </Card>
        </Box>
    );
}

export default ProjectCard;