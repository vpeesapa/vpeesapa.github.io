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
        id: 0,
        title: "Effugium",
        description: "An immersive first-person exploratory horror walking simulator",
        thumbnail: Effugium,
        link: "https://team-glasses.itch.io/effugium",
        objectFit: "cover",
        info: [
            "Players explore an abandoned space facility in search for a means of escape by solving puzzles with hints told diegetically through the environment.",
            "The design of Effugium emphasized a dreadful atmosphere mixed in with immersive sounds as well as an emergent narrative.",
            "Sounds and music were made in collaboration with students from the Berklee College of Music.",
            "I served as the co-director and co-producer for the game and was responsible for the design of its world and narrative. I was also responsible for the interaction and movement systems, which formed the core gameplay.",
            "Technologies used: Unity/C#"
        ]
    },
    {
        id: 1,
        title: "The Endless Battle",
        description: "A 2D bullet hell shooter inspired by the hacking minigame from NieR:Automata",
        thumbnail: TheEndlessBattle,
        link: "https://megane20.itch.io/the-endless-battle",
        objectFit: "cover"
    },
    {
        id: 2,
        title: "Unititled Platformer Game",
        description: "A challenging 2D platformer game",
        thumbnail: UntitledPlatformerGame,
        link: "https://megane20.itch.io/untitled-platformer-game",
        objectFit: "cover"
    },
    {
        id: 3,
        title: "3D Graphics Library",
        description: "A simple 3D graphics library that renders and modifies images based on specifications",
        thumbnail: Teapot,
        link: "",
        objectFit: "fill"
    },
    {
        id: 4,
        title: "HealthyU",
        description: "An easy-to-use web application that curates relevant health information specifically catered towards senior citizens",
        thumbnail: HealthyU,
        link: "",
        objectFit: "fill"
    },
    {
        id: 5,
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