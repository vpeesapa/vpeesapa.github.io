import * as React from 'react';
import {
    Stack,
    Box,
    Typography,
    Button,
    useMediaQuery
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function TitleBar(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 20 : 30;

    return (
        <Stack direction="row" sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Box>
                <Typography sx={{textAlign: 'left',fontSize: {fontSize},fontFamily: 'Play',pl: {xs: 7,sm: 10}}}>
                        Portfolio
                </Typography>
            </Box>
            <Box sx={{pr: {xs: 7,sm: 10}}}>
                <Button variant="contained" endIcon={<DownloadIcon />} sx={{backgroundColor: '#000000','&:hover': {backgroundColor: '#000000'}}}>
                    Resume
                </Button>
            </Box>
        </Stack>
    );
}

export default TitleBar;