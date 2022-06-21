import * as React from 'react';
import {
    Stack
} from '@mui/material';
import TitleBar from './TitleBar';
import Projects from './Projects';

function Portfolio(props) {
    React.useEffect(() => {
        // Scrolls to the top of the page whenever the component is mounted
        window.scrollTo(0,0);
    },[]);

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