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
    description: `With over a decade of experience in software development, I specialize in designing and implementing scalable and robust solutions. My expertise includes Node.js, React, Vue, and React Native, applied to projects across various industries. Additionally, I have extensive experience with relational and non-relational databases, ensuring data integrity and performance.`,
    aboutItems: [
      {label: 'Location', text: 'São Paulo, Brazil', Icon: MapIcon},
      {label: 'Age', text: '32', Icon: CalendarIcon},
      {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
      {label: 'Interests', text: 'Books, games, movies', Icon: SparklesIcon},
      {label: 'Study', text: 'FATEC', Icon: AcademicCapIcon},
    ],
  };
  

  export const skills: SkillGroup[] = [

    {
      name: 'Frontend development',
      skills: [
        {
          name: 'React',
          level: 9,
        },
        {
          name: 'Typescript',
          level: 7,
        },
        {
          name: 'Angular',
          level: 7,
        },
      ],
    },
    {
      name: 'Backend development',
      skills: [
        {
          name: 'Node.js',
          level: 9,
        },
        {
          name: 'Java',
          level: 7,
        },
        {
          name: 'Kotlin',
          level: 7,
        },
      ],
    },
    {
      name: 'Mobile development',
      skills: [
        {
          name: 'React Native',
          level: 8,
        },
      ],
    },
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
  ];
  

  export const education: TimelineItem[] = [
    {
      date: 'July 2015',
      location: 'FATEC',
      title: 'Analysis and Systems Development',
    },
    {
      date: 'December 2024',
      location: 'Impacta',
      title: 'MBA in Software Architecture',
    },

  ];
  
  export const experience: TimelineItem[] = [
    {
      date: 'June 2025 - Present',
      location: 'Accesstage',
      title: 'Software Engineer',
      content: (<>
        <p>
          At Accesstage I work as a Full Stack Software Engineer working on mission-critical financial systems, contributing to the development and maintenance of business-critical applications.
        </p>
        <br />
        <p>
          Hands-on experience with services such as Cognito, S3, ECS, and CloudWatch, supporting application reliability, observability, and high availability.
        </p>
        <br />
        <p>
          Stack: Angular, Java, Spring
        </p>
      </>)
    },
    {
      date: 'February 2025 - June 2025',
      location: 'Fillet',
      title: 'Tech Lead',
      content: (<>
        <p>
          As a Tech Lead, I combined hands-on development with technical leadership, actively contributing to architectural decisions, backlog prioritization, and refinement sessions.        </p>
        <br />
        <p>
          I worked closely with the team and stakeholders to define technical solutions aligned with business needs, ensuring scalability, performance, and maintainability. In addition to development, I supported the team by guiding best practices, reviewing code, and helping unblock technical challenges.        </p>
        <br />
        <p>
          Stack: Node.js, TypeScript, MySQL, React, React Native, Swift and Kotlin
        </p>

      </>)
    },
    {
      date: 'May 2023 - February 2025',
      location: 'Fillet',
      title: 'Senior Full-stack Software Engineer',
      content: (<>
        <p>
          In Fillet I worked as a Senior Fullstack Developer at Fillet, an agency with a strong software development division. I contribute to various projects, helping design and enhance scalable and efficient solutions.
        </p>
        <br />
        <p>
          Some of the key projects I have worked on include:
        </p>
        <br />
        <p>
          Development of vehicle rental applications for large construction companies, ensuring security, scalability, and integration with management systems.
          Creation of a self-check-in system for the hospitality industry, optimizing the guest experience and reducing manual processes.
          Implementation of tagging for native iOS applications using Swift, improving data collection and analysis for business strategies.
        </p>
        <br />
        <p>
          Stack: Node.js, TypeScript, MySQL, React, React Native, Swift and Kotlin
        </p>

      </>)
    },
    {
      date: 'November 2021 - March 2023',
      location: 'Infracommerce',
      title: 'Techlead',
      content: (
        <><p>
          I worked as a Tech Lead in the Omni Channel team, guiding the development and evolution of the team’s solutions. During this time, I led the creation of a React Native app, ensuring a smooth and responsive user experience.
        </p><br /><p>
            Additionally, I contributed to the improvement of a web application, using React and Node.js, continuously enhancing the platform’s architecture and performance. My role involved defining technical standards and best practices while supporting the team to ensure efficient deliveries aligned with business needs.
          </p><br /><p>
            Stack: React Native, React, Node.js
          </p></>
      ),
    },
    {
      date: 'May 2019 - November 2021',
      location: 'Infracommerce',
      title: 'Full-stack Software Engineer',
      content: (
        <><p>
          At Infracommerce, I worked as a full-stack developer, contributing to various finance-focused projects. Some of the key challenges included developing and maintaining critical systems such as an e-wallet, a credit provisioning platform, and a billing control system, ensuring secure and scalable solutions for users.
        </p><br /><p>
            I worked with Node.js, NestJS, React, Vue, MongoDB, and GraphQL, implementing robust APIs, efficient architectures, and intuitive interfaces. Additionally, I was responsible for designing and structuring the implementation of a micro-frontend environment, enabling greater modularization and platform scalability. I also played a key role in creating a design system library, ensuring consistency and efficiency in UI development.
          </p><br /><p>
            Stack: Node.js, NestJS, React, Vue, MongoDB, GraphQL
          </p></>
      ),
    },
    {
      date: 'December 2018 - January 2019',
      location: 'Conta Azul',
      title: 'Frontend Software Engineer',
      content: (
        <><p>
          At Conta Azul, I worked as a frontend developer, focusing on developing and improving interfaces for the platform’s accounting module. I worked with React, Vue, and JavaScript, building scalable and intuitive solutions to enhance the user experience.
        </p><br /><p>
            n addition to developing reusable and accessible components, I also implemented automated tests using Jest, ensuring code quality and reliability. My contributions helped evolve the platform, providing a smoother and more efficient navigation experience for accountants and business owners.
          </p><br /><p>
            Stack: React, Vue, JavaScript, Jest
          </p></>
      ),
    },

    {
      date: 'July 2015 - December 2017',
      location: 'ConferenciaCorp',
      title: 'Full-stack Software Engineer',
      content: (
        <>
          <p>
            At ConferenciaCorp, I worked as a full-stack developer, contributing to various internal systems and enhancing the company's platforms. One of the key projects I was involved in was the development of a call operator support system, where I implemented advanced integrations with Asterisk to ensure efficient and stable communication.
          </p>
          <br />
          <p>
            I utilized PHP, React, HTML, CSS, and JavaScript to develop and improve features, optimizing both the interface and application performance. My work ranged from creating APIs for seamless service communication to building intuitive user interfaces that enhanced the user experience.
          </p>
          <br />
          <p>
            Stack: PHP, React, HTML, CSS, JavaScript
          </p>
        </>
      ),
    },
  ];
  

  export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/caxone'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alvarocaxone/'},
    {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alvarocaxone/'},
  ];
  