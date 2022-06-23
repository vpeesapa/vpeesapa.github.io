import * as React from 'react';
import {
    Typography,
    useMediaQuery
} from '@mui/material';

function Footer(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 15 : 25;

    return (
        <div style={{marginTop: 50,backgroundColor: 'black'}}>
            <footer style={{paddingTop: 20,paddingBottom: 20}}>
                <Typography sx={{color: 'white',fontSize: {fontSize},fontFamily: 'Play', textAlign: 'center'}}>
                    Made using <a style={{color: 'white'}} href="https://reactjs.org/">React.js</a> and <a style={{color: 'white'}} href="https://mui.com/">Material UI</a>
                    <br />
                    Hosted on <a style={{color: 'white'}} href="https://pages.github.com/">GitHub Pages</a>
                </Typography>
            </footer>
        </div>
    );
}

export default Footer;