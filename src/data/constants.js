import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Eye4Eye from './images/eye4eye_img.jpg';
import SmallTalk from './images/small_talk_img.png';
import Effugium from './images/Effugium_Logo.jpg';
import TheEndlessBattle from './images/The Endless Battle.png';
import UntitledPlatformerGame from './images/untitled-platformer-game.png';
import PrimeEngine from './images/PrimeEngine.png';
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
        title: "Eye 4 Eye",
        description: "A first-person detective adventure puzzle game with retro graphics",
        thumbnail: Eye4Eye,
        includePic: true,
        link: "https://store.steampowered.com/app/2269450/Eye_4_Eye/",
        objectFit: "cover",
        info: [
            "In Eye 4 Eye, players assume the role of Hazel, a struggling detective in a futuristic dystopia tasked with solving a mysterious missing daughter case inside of a mysterious Victorian mansion, bizarrely found inside of a high-tech company complex.",
            "Players must gather clues with the help of their trusty search engine and uncover the dark secrets surrounding this strange case.",
            "I served as the Lead Engineer of the game and played a key role in the development of the core gameplay systems of the game. At the same time, I was also responsible for ensuring that the engineering team wrote modular and designer-friendly code.",
            "As a lead, I also regularly communicated with other disciplines in the team - notably the Director, Production, Design, Usability, and QA teams to discuss design implementations and development pipelines. I also regularly communicated with the engineering team either through weekly standup meetings or one-on-ones to ensure frequent updates were made.",
            "I was also responsible for maintaining the Technical Design Document and Burndown Chart to help ease the process of developing such a large game.",
            "As an engineer, I contributed in the development of some of the core gameplay systems like the movement, interaction, item history, inventory, and dialogue systems. I also worked on many accessibility related systems like the dynamically layered hint system <a href='https://github.com/vpeesapa/Eye4EyeHintSystem'>(code sample here)</a>.",
            "I also developed functionality that allows the shader to be dynamically modified based on in-game events to better fit the mood of the situation.",
            "In addition, I also worked on the Save/Load system and also developed the Steam port of the game, including implementing Steam achievements.",
            "Technologies used: Unity 3D, Perforce for version control, YarnSpinner for the Dialogue system, and Easy Save 3 for the Save/Load system"
        ]
    },
    {
        id: 1,
        title: "Small Talk",
        description: "An experimental game about conversations",
        thumbnail: SmallTalk,
        includePic: true,
        link: "",
        objectFit: "cover",
        info: [
            "Small Talk is an experimental game where players take up the role of a police investigator and interrogate an individual named Jake Smith regarding a murder case and force him to confess his crimes.",
            "The core gameplay loop involves the player reading documents relevant to the case, regularly conversing with Jake, and gathering enough evidence that can corner him. Additionally, Jake's responses are controlled by a conversational AI based on his backstory data saved in Convai's conversational agent creation suite.",
            "Small Talk was developed as a Directed Research project to study the effectiveness of conversational AI as a means of engagement and immersion for the player.",
            "My contributions towards Small Talk include designing the core gameplay loop and narrative for the game. I also served as a Producer on the project to regularly manage progress using tools such as Trello and organize frequent meetings between teammates.",
            "Towards the end of development, I was also responsible for robust prompt engineering to make the gameplay and relevant conversations feel more dynamic.",
            "Throughout the entire development process, I also actively participated in the engineering design of the underlying system.",
            "Technologies used: Unity, Perforce for version control, Convai for conversational AI tools, Trello for tracking progress, and Twine for prototyping the overarching narrative"
        ]
    },
    {
        id: 2,
        title: "Effugium",
        description: "An immersive first-person exploratory horror walking simulator",
        thumbnail: Effugium,
        includePic: true,
        link: "https://store.steampowered.com/app/2429720/Effugium/",
        objectFit: "cover",
        info: [
            "In Effugium, players explore an abandoned space facility in search for a means of escape by solving puzzles with hints told diegetically through the environment.",
            "The design of Effugium emphasizes a dreadful atmosphere mixed in with immersive sounds as well as an emergent narrative.",
            "Sounds and music were made in collaboration with students from the Berklee College of Music.",
            "I served as the co-director and co-producer for the game and was responsible for the design of its world and narrative. I was also responsible for the interaction and movement systems, which formed the core gameplay.",
            "I also developed the Steam port of the game, including implementing Steam achievements.",
            "Technologies used: Unity 3D, Perforce for version control"
        ]
    },
    {
        id: 3,
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
        id: 4,
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
        id: 5,
        title: "Modifying PrimeEngine",
        description: "",
        thumbnail: PrimeEngine,
        includePic: true,
        link: "",
        objectFit: "cover",
        info: [
            "As part of the game engine development class at USC, I implemented a slew of new features to PrimeEngine, a barebones 3D game engine provided to us by Prof. Artem Kovalovs.",
            "Some of these features included creating a Physics system from scratch that determined how various objects in the scene would interact with and implementing camera frustum culling to improve performance by generating AABB boxes around every mesh in the scene.",
            "I also implemented a Wind Physics system which would enable a mesh to sway in the direction of the wind source by utilizing related shader code.",
            "As part of my milestones, I implemented additional scripting functionality for the Lua scripts and tested it on various colliders and triggers.",
            "Technologies Used: C++ and Maya for importing levels into the scene"
        ]
    },
    {
        id: 6,
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
        id: 7,
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
        id: 8,
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