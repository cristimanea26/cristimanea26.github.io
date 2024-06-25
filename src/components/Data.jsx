//* Icons
import * as SiIcons from "react-icons/si";

//* Logo
import cm from "../assets/images/cm.jpeg";

//* Web
import bg from "../assets/images/web/bg.png";
import rfwh from "../assets/images/web/rfwh.png";
import dr from "../assets/images/web/dr.png";
import tdl from "../assets/images/web/tdl.png";
import ca from "../assets/images/web/ca.png";

//* Design
import gate from "../assets/images/design/01_gate.jpg";
import shadowshiver from "../assets/images/design/02_shadowshiver.jpg";
import devourer from "../assets/images/design/03_devourer.jpg";
import vanquiser from "../assets/images/design/04_vanquiser.jpg";
import cr from "../assets/images/design/05_cr.jpg";
import sazrajh from "../assets/images/design/06_sazrajh.jpg";
import nightcrackle from "../assets/images/design/07_nightcrackle.jpg";

//* Game
import tla from "../assets/images/game/tla.jpg";
import bd from "../assets/images/game/bd.png";
import md from "../assets/images/game/md.png";

export const menuData = [
  {
    title: "About",
    path: "/",
    cName: "cMenu",
  },
  {
    title: "Projects",
    path: "/projects",
    cName: "cMenu",
  },
  {
    title: "Skills",
    path: "/skills",
    cName: "cMenu",
  },
  {
    title: "Contact",
    path: "/contact",
    cName: "cMenu",
  },
];

export const logo = [
  {
    title: "Cristi Manea",
    icon: cm,
  },
];

export const education = [
  {
    title: "Master's degree",
    university: "Valahia University of Targoviste",
    specialization:
      "Systems engineering: Advanced Automation, Production and Industrial Informatics",
    adress: "Targoviste, Romania",
    date: "01/10/2018 - 08/07/2020",
    icon: <SiIcons.SiInternetarchive />,
    cName: "cEducation",
  },
  {
    title: "Bachelor's degree",
    university: "Valahia University of Targoviste",
    specialization: "Systems engineering: Automation and Applied Informatics",
    adress: "Targoviste, Romania",
    date: "01/10/2014 - 20/06/2018",
    icon: <SiIcons.SiInternetarchive />,
    cName: "cEducation",
  },
];

export const work = [
  {
    title: "System Design Tenician",
    company: "Arctic",
    description: "R&D: Development of washing machines",
    adress: "Ulmi, Romania",
    date: "11/2020 - CURRENT",
    icon: <SiIcons.SiOpenlayers />,
    cName: "cWork",
  },
  {
    title: "Mechanical Design Engineer",
    company: "SC METAPLAST SRL",
    description:
      "R&D: Development of plastic parts for the automotive and home appliance industry",
    adress: "Titu, Romania",
    date: "10/2018 - 10/2020",
    icon: <SiIcons.SiOpenlayers />,
    cName: "cWork",
  },
  {
    title: "Web Developer",
    company: "KonsultHCS",
    description:
      "Web development: Websites development based on specific templates using a custom CMS",
    adress: "Targoviste, Romania",
    date: "06/2016 - 05/2017",
    icon: <SiIcons.SiOpenlayers />,
    cName: "cWork",
  },
];

export const contactA = [
  {
    title: "cristimanea26@gmail.com",
    path: "mailto:cristimanea26@gmail.com",
    icon: <SiIcons.SiGmail />,
    cName: "cContact",
  },
  {
    title: "+40 730 338 798",
    path: "https://api.whatsapp.com/send?phone=40730338798",
    icon: <SiIcons.SiWhatsapp />,
    cName: "cContact",
  },
];

export const contactB = [
  {
    path: "https://www.facebook.com/cristi.manea.35325/",
    icon: <SiIcons.SiFacebook />,
    cName: "cContact",
  },
  {
    path: "https://www.linkedin.com/in/cristi-manea-3126a5172/",
    icon: <SiIcons.SiLinkedin />,
    cName: "cContact",
  },
  {
    path: "https://github.com/cristimanea26",
    icon: <SiIcons.SiGithub />,
    cName: "cContact",
  },
  {
    path: "https://www.artstation.com/cristimanea26",
    icon: <SiIcons.SiArtstation />,
    cName: "cContact",
  },
];

export const web = [
  {
    title: "Countries API",
    image: ca,
    description: "Web application developed to improve web knowledge.",
    path: "https://cristimanea26.github.io/countriesAPIApp/",
  },
  {
    title: "To Do List",
    image: tdl,
    description: "Web application developed to improve web knowledge.",
    path: "https://cristimanea26.github.io/toDoListApp/",
  },
  {
    title: "Discover Romania",
    image: dr,
    description: "Web application developed based on a template made in figma.",
    path: "https://cristimanea26.github.io/discoverRomaniaApp/",
  },
  {
    title: "RoboFriends with Hooks",
    image: rfwh,
    description:
      "Web application developed during the complete web developer 2022 zero to mastery course made with hooks.",
    path: "https://cristimanea26.github.io/rf_hooks/",
  },
  {
    title: "RoboFriends with Classes",
    image: rfwh,
    description:
      "Web application developed during the complete web developer 2022 zero to mastery course made with classes.",
    path: "https://cristimanea26.github.io/rf_classes/",
  },
  {
    title: "Background Generator",
    image: bg,
    description:
      "Web application developed during the complete web developer 2022 zero to mastery course.",
    path: "https://cristimanea26.github.io/background_generator/",
  },
];

export const design = [
  {
    title: "Sazrajh",
    image: sazrajh,
    description:
      "Personal project inspired by League of Legends and House of the Dragon TV series.",
    path: "https://www.artstation.com/artwork/wJK6ng",
  },
  {
    title: "Nightcrackle",
    image: nightcrackle,
    description: "Personal project inspired by Demon Slayer.",
    path: "https://www.artstation.com/artwork/r9q51G",
  },
  {
    title: "Crimson Ronin",
    image: cr,
    description: "Character created during the Crimson Ronin course.",
    path: "https://www.artstation.com/artwork/YK6eQP",
  },
  {
    title: "Vanquiser",
    image: vanquiser,
    description: "Personal project inspired by Heroes Of The Storm game.",
    path: "https://www.artstation.com/artwork/w6q4kZ",
  },
  {
    title: "Devourer",
    image: devourer,
    description: "Sword created for a job from freelancer.com.",
    path: "https://www.artstation.com/artwork/8l68eO",
  },
  {
    title: "Shadowshiver",
    image: shadowshiver,
    description: "Sword inspired by World of Warcraft game.",
    path: "https://www.artstation.com/artwork/YawzG6",
  },
  {
    title: "Gate",
    image: gate,
    description: "Gate inspired by Heroes Of The Storm game.",
    path: "https://www.artstation.com/artwork/nQVZeK",
  },
];

export const game = [
  {
    title: "The Last Ancient",
    image: tla,
    description:
      "This is the game I worked on for 6 months for the Game Cup 1.0 competition.",
    path: "https://halfroundgames.itch.io/the-last-ancient",
  },
  {
    title: "Robotic Arm",
    image: bd,
    description:
      "This is the application I made in Unity for bachelor's degree.",
    path: "https://drive.google.com/file/d/1tlaXXqUHBnUrFjaPy8oQyM6oC8efY-5j/view?usp=sharing",
  },
  {
    title: "AR application",
    image: md,
    description: "This is the application I made in Unity for master's degree.",
    path: "https://drive.google.com/file/d/1s_gN_o_4vOtKNzAuYv03LXgLK_fUyjrL/view?usp=sharing",
  },
];

export const webTechs = [
  {
    title: "HTML",
    icon: <SiIcons.SiHtml5 />,
    experience: "5 years",
    cName: "cSkill",
  },
  {
    title: "CSS",
    icon: <SiIcons.SiCss3 />,
    experience: "3 years",
    cName: "cSkill",
  },
  {
    title: "SASS",
    icon: <SiIcons.SiSass />,
    experience: "2 years",
    cName: "cSkill",
  },
  {
    title: "JAVASCRIPT",
    icon: <SiIcons.SiJavascript />,
    experience: "2 years",
    cName: "cSkill",
  },
  {
    title: "REACT JS",
    icon: <SiIcons.SiReact />,
    experience: "1 year",
    cName: "cSkill",
  },
  {
    title: "SQL",
    icon: <SiIcons.SiDatabricks />,
    experience: "1 year",
    cName: "cSkill",
  },
  {
    title: "VERSION CONTROL GIT",
    icon: <SiIcons.SiGithub />,
    experience: "1 year",
    cName: "cSkill",
  },
];

export const designTechs = [
  {
    title: "BLENDER",
    icon: <SiIcons.SiBlender />,
    experience: "4 years",
    cName: "cSkill",
  },
  {
    title: "SUBSTANCE PAINTER",
    icon: <SiIcons.SiSparkasse />,
    experience: "3 years",
    cName: "cSkill",
  },
  {
    title: "PHOTOSHOP",
    icon: <SiIcons.SiAdobephotoshop />,
    experience: "3 years",
    cName: "cSkill",
  },
  {
    title: "KRITA",
    icon: <SiIcons.SiKrita />,
    experience: "2 years",
    cName: "cSkill",
  },
];

export const gameTechs = [
  {
    title: "UNITY",
    icon: <SiIcons.SiUnity />,
    experience: "3 years",
    cName: "cSkill",
  },
  {
    title: "C#",
    icon: <SiIcons.SiCsharp />,
    experience: "1 year",
    cName: "cSkill",
  },
];

export const otherTechs = [
  {
    title: "MICROSOFT OFFICE SUITE",
    icon: <SiIcons.SiMicrosoftoffice />,
    experience: "10 years",
    cName: "cSkill",
  },
  {
    title: "MICROSOFT VISUAL STUDIO CODE",
    icon: <SiIcons.SiVisualstudiocode />,
    experience: "5 years",
    cName: "cSkill",
  },
  {
    title: "AUTODESK MAYA",
    icon: <SiIcons.SiMonster />,
    experience: "1 year",
    cName: "cSkill",
  },
  {
    title: "AUTOCAD",
    icon: <SiIcons.SiAutodesk />,
    experience: "2 years",
    cName: "cSkill",
  },
  {
    title: "CATIA",
    icon: <SiIcons.SiDassaultsystemes />,
    experience: "2 years",
    cName: "cSkill",
  },
];
