import * as React from 'react';
import {
    Stack,
    Box,
    Typography,
    Button,
    useMediaQuery
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Resume from '../../data/documents/Varun_Peesapati_Resume.pdf';

function TitleBar(props) {
    // Responsive font size
    const matches = useMediaQuery('(max-width:800px)');
    const fontSize = matches ? 20 : 30;

    return (
        <Stack direction="row" sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex',justifyContent: 'flex-start'}}>
                <ImportContactsIcon sx={{pr: 2,pt: {xs: 0,sm: 1.5}}} />
                <Typography sx={{textAlign: 'left',fontSize: {fontSize},fontFamily: 'Play',fontWeight: 'bold',pl: {xs: 0}}}>
                        Portfolio
                </Typography>
            </Box>
            <Box sx={{pr: {xs: 0},pt: {xs: 0,sm: 0.5}}}>
                <Button href={Resume} variant="contained" endIcon={<DownloadIcon />} sx={{fontFamily: 'Play',backgroundColor: '#000000','&:hover': {backgroundColor: '#000000'}}}>
                    Resume
                </Button>
            </Box>
        </Stack>
    );
}

export default TitleBar;