import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Effugium from './images/Effugium_Logo.jpg';
import TheEndlessBattle from './images/The Endless Battle.png';
import UntitledPlatformerGame from './images/untitled-platformer-game.png';
import Teapot from './images/teapot.png';
import HealthyU from './images/healthy-u.png';
import Scheduled from './images/scheduled.png';
import BSP from './images/bsp-cover.jpg';
import VS from './images/vinland-saga.jpg';
import NA from './images/nier-cover.jpg';

export const drawerWidth = 240;

export const headers = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    }
];

export const socialMediaLinks = [
    {
        icon: <GitHubIcon />,
        link: "https://github.com/vpeesapa"
    },
    {
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/vpeesapati/"
    },
    {
        icon: <TwitterIcon />,
        link: "https://twitter.com/refinedmegane"
    },
    {
        icon: <LanguageIcon />,
        link: "https://megane20.itch.io"
    }
];

export const cards = [
    {
        title: "Effugium",
        description: "An immersive first-person exploratory horror walking simulator",
        thumbnail: Effugium,
        link: "https://team-glasses.itch.io/effugium",
        objectFit: "cover"
    },
    {
        title: "The Endless Battle",
        description: "A 2D bullet hell shooter inspired by the hacking minigame from NieR:Automata",
        thumbnail: TheEndlessBattle,
        link: "https://megane20.itch.io/the-endless-battle",
        objectFit: "cover"
    },
    {
        title: "Unititled Platformer Game",
        description: "A challenging 2D platformer game",
        thumbnail: UntitledPlatformerGame,
        link: "https://megane20.itch.io/untitled-platformer-game",
        objectFit: "cover"
    },
    {
        title: "3D Graphics Library",
        description: "A simple 3D graphics library that renders and modifies images based on specifications",
        thumbnail: Teapot,
        link: "",
        objectFit: "fill"
    },
    {
        title: "HealthyU",
        description: "An easy-to-use web application that curates relevant health information specifically catered towards senior citizens",
        thumbnail: HealthyU,
        link: "",
        objectFit: "fill"
    },
    {
        title: "Scheduled!",
        description: "A web application that helps students keep track of their daily activities",
        thumbnail: Scheduled,
        link: "https://github.com/vpeesapa/Scheduled",
        objectFit: "cover"
    }
];

export const favorites = [
    {
        title: "Blood, Sweat, and Pixels",
        image: BSP
    },
    {
        title: "Vinland Saga",
        image: VS
    },
    {
        title: "NieR: Automata",
        image: NA
    }
];