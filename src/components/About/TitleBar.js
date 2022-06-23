import * as React from 'react';
import {
    Stack,
    Box,
    Typography,
    useMediaQuery
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function TitleBar(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 20 : 30;

    return (
        <Stack direction="row" sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex',justifyContent: 'flex-start'}}>
                <PersonIcon sx={{pr: 2,pt: {xs: 0.3,sm: 0.5,md: 1.5}}} />
                <Typography sx={{textAlign: 'left',fontSize: {fontSize},fontFamily: 'Play',fontWeight: 'bold',pl: {xs: 0}}}>
                        About me
                </Typography>
            </Box>
        </Stack>
    );
}

export default TitleBar;