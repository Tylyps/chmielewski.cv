const iconEnum = {
  JS: "js_logo.svg",
  REACT: "React_icon.svg",
  REDUX: "redux_icon.svg",
  CSS: "CSS3_logo.svg",
  TS: "Typescript_logo.svg",
  HTML: "HTML5_logo.svg",
  SASS: "sass_icon.svg",
  LESS: "less_icon.svg",
  ROKU: "roku_logo.svg",
  GRAPHQL: "graphql-logo.svg",
  JQUERY: "jquery_logo.svg",
  NODE: "Nodejs_logo.svg",
  CSHARP: "csharp_logo.svg",
  UNITY: "Unity_logo.svg",
  GODOT: "godot-logo.svg",
  ANGULAR: "angular-icon.svg",
  DOT_NET: "dot-net-core-7.svg",
  JAVA: "java_logo.svg",
  CPLUS: "cplus_logo.svg",
  MONGO_DB: "mongodb-icon.svg",
  MYSQL: "mysql.svg",
};

const workData = [
  {
    employer: "Better Software Group",
    startDate: "11.2021",
    endDate: "01.2024",
    workTitle: "Software Developer",
    workKey: "BSG",
    projects: [
      {
        projectKey: "BSG",
        projectName: "The Better",
        projectTime: "09.2023 - 01.2024",
        projectTechnologies: "ROKU, React",
      },
      {
        projectKey: "NORDISK",
        projectName: "Nordisk Film SLA",
        projectTime: "08.2023 - 09.2023",
        projectTechnologies: "React, NextJS",
      },
      {
        projectKey: "STREAMIT2",
        projectName: "Stream-It Roku T&M / TVCoins",
        projectTime: "03.2023 - 08.2023",
        projectTechnologies: "Roku, BrightScript, GraphQL",
      },
      {
        projectKey: "XALA",
        projectName: "XALA",
        projectTime: "09.2022 - 03.2023",
        projectTechnologies: "React, BrightScript, Roku",
      },
      {
        projectKey: "STREAMIT",
        projectName: "StreamIT / TVCoins",
        projectTime: "11.2021 - 12.2022",
        projectTechnologies: "Roku, BrightScript, GraphQL",
      },
    ],
  },
  {
    employer: "Tuatara Sp. z o.o.",
    startDate: "07.2019",
    endDate: "10.2021",
    workTitle: "Junior Frontend Developer",
    workKey: "TUATARA",
    projects: [
      {
        projectKey: "VANTI",
        projectName: "Vanti",
        projectTime: "11.2020 - 01.2021",
        projectTechnologies: "React, TypeScript",
      },
      {
        projectKey: "OES",
        projectName: "Omantel Enterprise Selfcare",
        projectTime: "04.2020 - 10.2020",
        projectTechnologies: "React, TypeScript",
      },
      {
        projectKey: "OMA",
        projectName: "Omantel Mobile App",
        projectTime: "07.2019 - 10.2021",
        projectTechnologies:
          "React, Redux, React Native, TypeScript, Styled Components",
      },
    ],
  },
  {
    employer: "Netguru S.A.",
    startDate: "08.2018",
    endDate: "01.2019",
    workTitle: "Junior Frontend Developer",
    workKey: "NG",
    projects: [
      {
        projectKey: "PCA",
        projectName: "Private client application",
        projectTime: "08.2018 - 01.2019",
        projectTechnologies: "React, Redux, Sass, JavaScript, JS6+",
      },
    ],
  },
  {
    employer: "BitCraft Sp. z o.o.",
    startDate: "05.2018",
    endDate: "07.2018",
    workTitle: "Junior Frontend Developer",
    workKey: "BC",
    projects: [
      {
        projectKey: "WS",
        projectName: "Web Stores",
        projectTime: "05.2018 - 07.2018",
        projectTechnologies: "JQuery, Less, JS6+, JavaScript",
      },
    ],
  },
  // {
  //   employer: "",
  //   startDate: "",
  //   endDate: "",
  //   workTitle: "",
  //   workKey: "",
  //   projects: [
  //     {
  //       projectName: "",
  //       projectTime: "",
  //       projectKey: "",
  //       projectTechnologies: "",
  //     },
  //   ],
  // },
];

const skillsData = {
  COMMERCIAL: [
    {
      imageUrl: iconEnum.JS,
      title: "JavaScript",
      lvl: 3,
    },
    {
      imageUrl: iconEnum.REACT,
      title: "React",
      lvl: 3,
    },
    {
      imageUrl: iconEnum.REACT,
      title: "React Native",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.REDUX,
      title: "Redux",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.CSS,
      title: "CSS",
      lvl: 3,
    },
    {
      imageUrl: iconEnum.TS,
      title: "TypeScript",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.HTML,
      title: "HTML",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.SASS,
      title: "SCSS",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.LESS,
      title: "LESS",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.GRAPHQL,
      title: "GraphQL",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.ROKU,
      title: "Roku",
      subtitle: "(BrightScript & SceneGraph)",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.JQUERY,
      title: "jQuery",
      lvl: 2,
    },
    // {
    //   imageUrl: "",
    //   titleKey: "SKILL_",
    // },
  ],
  NO_COMMERCIAL: [
    // {
    //   imageUrl: "",
    //   titleKey: "SKILL_",
    // },
    {
      imageUrl: iconEnum.NODE,
      title: "Node.js",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.CSHARP,
      title: "C#",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.UNITY,
      title: "Unity",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.GODOT,
      title: "Godot",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.ANGULAR,
      title: "Angular2+",
      lvl: 2,
    },
    {
      imageUrl: iconEnum.MONGO_DB,
      title: "MongoDB",
      lvl: 1,
    },
    {
      imageUrl: iconEnum.MYSQL,
      title: "MySQL",
      lvl: 1,
    },
    {
      imageUrl: iconEnum.DOT_NET,
      title: ".Net",
      lvl: 1,
    },
    {
      imageUrl: iconEnum.JAVA,
      title: "Java",
      lvl: 1,
    },
    {
      imageUrl: iconEnum.CPLUS,
      title: "C++",
      lvl: 1,
    },
  ],
};

const educationData = [
  {
    name: "Politechnika Białostocka",
    time: "09.2017 - 03.2021",
    specializationKey: "SPECIALIZATION_IT",
    educationLevelKey: "EDUCATION_LEVEL_MASTER",
  },
  {
    name: "Zespół Szkół Elektrycznych im. Janusza Groszkowskiego",
    time: "09.2013 - 04.2017",
    specializationKey: "SPECIALIZATION_IT_TECH",
    educationLevelKey: "EDUCATION_LEVEL_TECHNICIAN",
  },
];

const coursesData = [
  {
    courseTitle: "The Complete React Developer Course (w/ Hooks and Redux)",
    courseCreator: "Andrew Mead / Udemy",
    courseTime: "11.2018, 07.2020",
    skillsIconUrl: [iconEnum.REACT, iconEnum.REDUX, iconEnum.JS],
  },
  {
    courseTitle: "React Native - The Practical Guide",
    courseCreator: "Maximilian Schwarzmüller / Udemy",
    courseTime: "03.2019, 09.2024",
    skillsIconUrl: [iconEnum.REACT, iconEnum.REDUX, iconEnum.JS],
  },
  {
    courseTitle: "The Modern JavaScript Bootcamp",
    courseCreator: "Andrew Mead / Udemy",
    courseTime: "05.2021",
    skillsIconUrl: [iconEnum.JS],
  },
  {
    courseTitle: "React Node MERN Stack from Scratch building Social Network",
    courseCreator: "Ryan Dhungel / Udemy",
    courseTime: "06.2021",
    skillsIconUrl: [
      iconEnum.JS,
      iconEnum.NODE,
      iconEnum.REACT,
      iconEnum.MONGO_DB,
    ],
  },
  {
    courseTitle: "MERN Stack React Node Ecommerce from Scratch to Deployment",
    courseCreator: "Ryan Dhungel / Udemy",
    courseTime: "06.2021",
    skillsIconUrl: [
      iconEnum.JS,
      iconEnum.NODE,
      iconEnum.REACT,
      iconEnum.MONGO_DB,
    ],
  },
  {
    courseTitle: "The Complete Node.js Developer Course (3rd Edition)",
    courseCreator: "Andrew Mead / Udemy",
    courseTime: "04.2022",
    skillsIconUrl: [iconEnum.NODE, iconEnum.JS, iconEnum.MONGO_DB],
  },
  {
    courseTitle: "Complete C# Masterclass",
    courseCreator: "Denis Panjuta / Udemy",
    courseTime: "05.2022, 11.2024",
    skillsIconUrl: [iconEnum.CSHARP, iconEnum.UNITY],
  },
  {
    courseTitle: "Unity Turn-Based Strategy Game: Intermediate C# Coding",
    courseCreator: "GameDev.tv Team, Code Monkey / Udemy",
    courseTime: "03.2023",
    skillsIconUrl: [iconEnum.UNITY, iconEnum.CSHARP],
  },
  {
    courseTitle: "Complete Godot 3D: Develop Your Own 3D Games Using Godot 4",
    courseCreator: "GameDev.tv Team, Bram Williams / Udemy",
    courseTime: "02.2024",
    skillsIconUrl: [iconEnum.GODOT, iconEnum.CSHARP],
  },
  {
    courseTitle: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    courseCreator: "Maximilian Schwarzmüller / Udemy",
    courseTime: "06.2024",
    skillsIconUrl: [
      iconEnum.JS,
      iconEnum.NODE,
      iconEnum.MONGO_DB,
      iconEnum.MYSQL,
      iconEnum.GRAPHQL,
    ],
  },
  {
    courseTitle: "Angular - The Complete Guide (2024 Edition)",
    courseCreator: "Maximilian Schwarzmüller / Udemy",
    courseTime: "10.2024",
    skillsIconUrl: [iconEnum.ANGULAR, iconEnum.JS],
  },
];

const interestsData = [
  {
    nameKey: "INTEREST_GAME",
    iconClass: "fa-solid fa-gamepad",
  },
  {
    nameKey: "INTEREST_COMPUTERS",
    iconClass: "fa-solid fa-computer",
  },
  {
    nameKey: "INTEREST_MODELS",
    iconClass: "fa-solid fa-cube",
  },
  {
    nameKey: "INTEREST_SPORTS",
    iconClass: "fa-solid fa-person-biking",
  },
  {
    nameKey: "INTEREST_LEARNING",
    iconClass: "fa-solid fa-book-open-reader",
  },
];
