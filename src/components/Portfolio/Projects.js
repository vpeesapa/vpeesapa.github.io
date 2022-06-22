import * as React from 'react';
import {
    Stack,
    useMediaQuery
} from '@mui/material';
import ProjectCard from './ProjectCard';
import {
    cards
} from '../../data/constants';

function Projects(props) {
    const matches = useMediaQuery('(max-width:800px)');
    const direction = matches ? "column" : "row";
    const fontSize = matches ? 20 : 30;
    const subtitleFontSize = matches ? 18 : 29;
    const subtitleVariant = matches ? "body2" : "body1";
    
    return (
        <Stack direction={direction} style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
            {
                cards.map((card) => (
                    <ProjectCard data={card} fontSize={fontSize} subtitleFontSize={subtitleFontSize} subtitleVariant={subtitleVariant} />
                ))
            }
        </Stack>
    );
}

export default Projects;