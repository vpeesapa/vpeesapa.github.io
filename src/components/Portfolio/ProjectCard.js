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

function ProjectCard(props) {
    const {data,fontSize,subtitleFontSize,subtitleVariant} = props;

    return (
        <Box sx={{p: {xs: "10px 10px 10px 10px",sm: "10px 10px 10px 10px"},display: 'flex',flexWrap: 'inherit'}} key={data.title}>
            <Card sx={{width: {xs: 275,sm: 350}}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={data.thumbnail}
                    alt={data.title}
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
                        <CardActions>
                            <Button size="small" variant="contained" href={data.link} sx={{fontFamily: 'Play'}}>
                                GO TO PROJECT
                            </Button>
                        </CardActions>
                    ) : null
                }
            </Card>
        </Box>
    );
}

export default ProjectCard;