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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProjectCard(props) {
    const {data,fontSize,subtitleFontSize,subtitleVariant} = props;

    return (
        <Box sx={{p: {xs: "10px 10px 10px 10px",sm: "10px 10px 10px 6px"},display: 'flex',flexWrap: 'inherit',justifyContent: 'center'}} key={data.title}>
            <Card sx={{position: 'relative',width: {xs: 275,sm: 350,md: 400},height: {xs: 350,sm: 350,md: 400}}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={data.thumbnail}
                    alt={data.title}
                    sx={{objectFit: 'fill'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize: {fontSize},fontFamily: 'Play'}}>
                        {data.title}
                    </Typography>
                    <Typography variant={subtitleVariant} color="text.secondary" sx={{fontSize: {subtitleFontSize},fontFamily: 'Play'}}>
                        {data.description}
                    </Typography>
                </CardContent>
                {
                    data.link !== "" ? (
                        <CardActions sx={{position: 'absolute',right: 5,top: {xs: 300,sm: 300,md: 345}}}>
                            <Button size="small" variant="contained" href={data.link} sx={{fontFamily: 'Play',backgroundColor: '#000000','&:hover': {backgroundColor: '#000000'}}}>
                                <ArrowRightAltIcon />
                            </Button>
                        </CardActions>
                    ) : null
                }
            </Card>
        </Box>
    );
}

export default ProjectCard;