import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Effugium from './images/Effugium_Logo.jpg';
import TheEndlessBattle from './images/The Endless Battle.png';
import UntitledPlatformerGame from './images/untitled-platformer-game.png';
import Steam from './images/steam.png';
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
        includePic: true,
        link: "https://team-glasses.itch.io/effugium",
        objectFit: "cover",
        info: [
            "In Effugium, players explore an abandoned space facility in search for a means of escape by solving puzzles with hints told diegetically through the environment.",
            "The design of Effugium emphasizes a dreadful atmosphere mixed in with immersive sounds as well as an emergent narrative.",
            "Sounds and music were made in collaboration with students from the Berklee College of Music.",
            "I served as the co-director and co-producer for the game and was responsible for the design of its world and narrative. I was also responsible for the interaction and movement systems, which formed the core gameplay.",
            "Technologies used: Unity 3D"
        ]
    },
    {
        id: 1,
        title: "The Endless Battle",
        description: "A 2D bullet hell shooter inspired by the hacking minigame from NieR:Automata",
        thumbnail: TheEndlessBattle,
        includePic: true,
        link: "https://megane20.itch.io/the-endless-battle",
        objectFit: "cover",
        info: [
            "The Endless Battle is a 2D bullet hell shooter where players must survive an endless barrage of attacks from distinct types of enemies, each with their own unique shooting patterns.",
            "I was responsible for all components of the game, including systems for the game's UI, player movement, and projectiles.",
            "The Endless Battle has support for PS4 controllers.",
            "Technologies used: Python (Pygame)"
        ]
    },
    {
        id: 2,
        title: "Untitled Platformer Game",
        description: "A challenging 2D platformer game",
        thumbnail: UntitledPlatformerGame,
        includePic: true,
        link: "https://megane20.itch.io/untitled-platformer-game",
        objectFit: "cover",
        info: [
            "Untitled Platformer Game is a 2D platformer game that challenges the players to clear a gauntlet of arduous courses in a variety of unique worlds.",
            "In Untitled Platformer Game, players take the role of Koble, an adventurous young man on a quest to connect the disconnected worlds of Isolasia.",
            "I was responsible for adding UI elements, the narrative, conducting playtests, and the press kit. I also designed the opening world.",
            "Technologies Used: Unity"
        ]
    },
    {
        id: 3,
        title: "Steam Specials Bot",
        description: "A Discord bot that displays the top 10 games currently on sale on Steam",
        thumbnail: Steam,
        includePic: false,
        link: "https://github.com/vpeesapa/steam-specials-scraper-bot",
        objectFit: "cover",
        info: [
            "Steam Specials Bot scrapes the latest sales information from Steam storefront and displays the top 10 games that are currently on sale.",
            "The bot also displays the top 10 best sellers for that particular day on the Steam storefront.",
            "Discord users with access to the bot simply need to send a message to the bot to request for the information they seek.",
            "I was responsible for developing the bot from scratch.",
            "Technologies Used: Python - Beautiful Soup for scraping data and Discord.py for creating endpoints to connect the bot to Discord"
        ]
    },
    {
        id: 4,
        title: "HealthyU",
        description: "An easy-to-use web application that curates relevant health information specifically catered towards senior citizens",
        thumbnail: HealthyU,
        includePic: true,
        link: "",
        objectFit: "fill",
        info: [
            "HealthyU is an easy-to-use web application designed to provide reliable health information when accessing a kiosk.",
            "HealthyU was developed as a progressive web app, which means that it can also be accessed offline.",
            "The project was awarded the Digital Health Resources Grant provided by UC Davis Health.",
            "I was involved in the beautifaction of the front-end, creating protected admin pages, and writing scrapers for easier gathering and testing of content in the application.",
            "Technologies used: React.js for front-end, Express.js for back-end, AWS for hosting the website, and Python (Beautiful Soup) for the scrapers"
        ]
    },
    {
        id: 5,
        title: "Scheduled!",
        description: "A web application that helps students keep track of their daily activities",
        thumbnail: Scheduled,
        includePic: true,
        link: "https://github.com/vpeesapa/Scheduled",
        objectFit: "cover",
        info: [
            "Scheduled! is a web application that integrates and personalizes necessary tools that are found in an organizer application such as a to-do list, etc. with a schedule that keeps track of a student's daily activities.",
            "The user is given complete freedom to add, edit, or delete items from their widgets.",
            "The application also features a weather widget which displays real-time weather on the homepage.",
            "I was responsible for UX and user testing.",
            "Techonlogies used: HTML, CSS, and JavaScript"
        ]
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