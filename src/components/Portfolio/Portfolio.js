import * as React from 'react';
import {
    Stack
} from '@mui/material';
import TitleBar from './TitleBar';
import Projects from './Projects';

function Portfolio(props) {

    return (
        <Stack>
            <TitleBar />
            <div>
                <Projects />
            </div>
        </Stack>
    );
}

export default Portfolio;