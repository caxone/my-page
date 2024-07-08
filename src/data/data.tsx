/* eslint-disable react/no-unescaped-entities */
import {
    AcademicCapIcon,
    CalendarIcon,
    DownloadIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
  } from '@heroicons/react/outline';
  
  import GithubIcon from '../components/Icon/GithubIcon';
  import InstagramIcon from '../components/Icon/InstagramIcon';
  import LinkedInIcon from '../components/Icon/LinkedInIcon';
  import heroImage from '../images/header-background.webp';

  import profilepic from '../images/profilepic.jpeg';

  import {
    About,
    Hero,
    HomepageMeta,
    SkillGroup,
    Social,
    TimelineItem,
  } from './dataDef';
  

  export const homePageMeta: HomepageMeta = {
    title: 'My Page',
    description: "My resume personal page",
  };
  

  export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'portfolio',
    Resume: 'resume',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
  } as const;
  
  export type SectionId = typeof SectionId[keyof typeof SectionId];


  export const heroData: Hero = {
    imageSrc: heroImage,
    name: `I'm Alvaro Caxone.`,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-white">
          I'm a Brazilian based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently available.
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-white">
          In my free time time, you can catch me playing my <strong className="text-stone-100">PS5</strong>,
          reading a <strong className="text-stone-100">book</strong>, or travelling with my{' '}
          <strong className="text-stone-100">family</strong>.
        </p>
      </>
    ),
    // actions: [
    //   {
    //     href: '/assets/resume.pdf',
    //     text: 'Resume',
    //     primary: true,
    //     Icon: DownloadIcon,
    //   },
    // ],
  };
  

  export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `i've been working as a developer for 9 years, and I worked in many types of componies e acting in various projects`,
    aboutItems: [
      {label: 'Location', text: 'São Paulo, Brazil', Icon: MapIcon},
      {label: 'Age', text: '29', Icon: CalendarIcon},
      {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
      {label: 'Interests', text: 'Books, games, movies', Icon: SparklesIcon},
      {label: 'Study', text: 'FATEC', Icon: AcademicCapIcon},
    ],
  };
  

  export const skills: SkillGroup[] = [
    {
      name: 'Spoken languages',
      skills: [
        {
          name: 'Portuguese',
          level: 10,
        },
        {
          name: 'English',
          level: 7,
        },
      ],
    },
    {
      name: 'Frontend development',
      skills: [
        {
          name: 'React',
          level: 9,
        },
        {
          name: 'Typescript',
          level: 6,
        },
        {
          name: 'Vue',
          level: 7,
        },
      ],
    },
    {
      name: 'Backend development',
      skills: [
        {
          name: 'Node.js',
          level: 8,
        },
        {
          name: 'PHP',
          level: 5,
        },
      ],
    },
    {
      name: 'Mobile development',
      skills: [
        {
          name: 'React Native',
          level: 7,
        },
      ],
    },
  ];
  

  export const education: TimelineItem[] = [
    {
      date: 'July 2015',
      location: 'FATEC',
      title: 'Analysis and Systems Development',
    },

  ];
  
  export const experience: TimelineItem[] = [
    {
      date: 'November 2021 - March 2023',
      location: 'Infracommerce',
      title: 'Techlead',
      content: (
        <p>
          Leading an Omni Channel team, 
          building a React Native App, also evolving a web app built with Node and React.
        </p>
      ),
    },
    {
      date: 'May 2019 - November 2021',
      location: 'Mazzatech',
      title: 'Software Engineer',
      content: (
        <p>
          I worked on an e-wallet application, integrating with BaaS platforms.
        </p>
      ),
    },
    {
      date: 'May 2018 - January 2019',
      location: 'Conta Azul',
      title: 'Frontend Software Engineer',
      content: (
        <p>
          Activities: Developing Platform Accounting Module;
        </p>
      ),
    },
    {
      date: 'December 2017 - May 2018',
      location: 'Wabbi Software S.A.',
      title: 'Frontend Software Engineer',
      content: (
        <p>
          Activities: Developing interfaces of accounting software
        </p>
      ),
    },
    {
      date: 'July 2015 - December 2017',
      location: 'ConferenciaCorp',
      title: 'Full-stack Developer',
      content: (
        <p>
          Activities: Developing interfaces of accounting software
        </p>
      ),
    },
    {
      date: 'May 2013 - May 2015',
      location: 'Cidade de São Paulo City Hall',
      title: 'Software Engineer',
      content: (
        <p>
          I started working as a developer maintaining the CMS that powered the entire São Paulo City Hall website.       
        </p>
      ),
    },
  ];
  

  export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/caxone'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alvarocaxone/'},
    {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alvarocaxone/'},
  ];
  