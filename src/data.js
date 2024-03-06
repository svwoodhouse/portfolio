import vmwareLogo from './assets/vmware_logo.png'
import concurLogo from './assets/sap_concur_logo.webp'
import sapNS2Logo from './assets/SAPNS2-Headerlogo.png'
import overwatch2Logo from './assets/overwatch2Logo.png'
import reactTailwind from './assets/tailwindCSS.png'
import emaily from './assets/Customer-Survey-Email.webp'
import jobhunter from './assets/JobHunter.jpg'
export const projects = [
    {
      title: "Emaily",
      subtitle: "React, React-Redux, React-Thunk, Passport JS, Google OAuth, Materialize CSS, MongoDB, StripeAPI, Express, SendGrid and Render",
      description: "Emaily is an application that allows Product Owners to send and collect customer feedback surveys. Users are able to login with Google OAuth and see their collection of surveys, send emails with surveys to a list of customers and users are billed via credits. Uses React, React-Redux, Redux-Thunk, and Materialize CSS for the frontend, MongoDB to store user data, Passport JS for Authentication flow, Stripe API for handling billing, and an Express server with custom middleware for the backend. Emails are sent with SendGrid and the application is deployed via Render.",
      image: emaily,
      link: "https://github.com/svwoodhouse/Emaily",
    },
    {
      title: "Job Hunter",
      subtitle: "React, React-Redux, Axios, MongoDB, Express, Squid-React-Components and Tailwind CSS",
      description: "This application extracts search results from job listings based on filters and displays them in a dashboard that allows the user to change the job status, check if the user applied to the job already and the date of when the user applied. Uses Squid-React-Components and Tailwind CSS, React and React-Redux for the frontend. Uses MongoDB for data storage and an express server for handling http requests in the backend.",
      image: jobhunter,
      link: "https://github.com/svwoodhouse/JobHunter"
    },
    {
      title: "Overwatch Statistics Comparison Application",
      subtitle: "Python, Pandas, Requests, BeautifulSoup",
      description: "This application extracts data of the players of the game Overwatch and compares the statistics between them. Uses Python, requests, pandas, and BeautifulSoup.",
      image: overwatch2Logo,
      link: "https://github.com/svwoodhouse/OverwatchMetricsApplication",
    },
    {
      title: "Squid React Components",
      subtitle: "React and Tailwind CSS",
      description: "Collection of tailwind styled reusable react components available in npm package as squid-react-components",
      image: reactTailwind,
      link: "https://github.com/svwoodhouse/squid-react-components",
    }
  ];

  export const skills = ['React', 'Javascript', 'Typescript', 'HTML/CSS', 'Go', 'Python', 'GraphQL', 'Java', 'C++', 'C', 'MongoDB', 'Node', 'Express','Vite', 'Webpack', 'Playwright', 'Jest', 'Docker', 'Jenkins', 'Concourse CI' ]
  export const resume = [
    {
        title: "Senior Software Engineer",
        logo: vmwareLogo,
        company: "VMWare",
        type: 'Full-Time',
        years: "November 2023 - January 2024",
        experiences: [
          "Worked on enhancing authorization code flow by implementing Proof Key for Code Exchange (PKCE). This enhances the application login flow by making it more secure and will be used for other internal project initiatives within the company.",
          "Worked to improve accessibility of Tanzu Mission Control by adding more accessibility features to internal components.",
          "Mentored junior developers on the team by helping them with the onboarding process, reviewing and providing feedback on MRs, providing guidance on coding standards and pair programming."  
        ]
    },
    {
      title: "Software Engineer",
      logo: vmwareLogo,
      company: "VMWare",
      type: 'Full-Time',
      years: "September 2021 - November 2023",
      experiences: [
        "Developed React based front-end applications with reusable react components and managed application state with useState hooks. Cross-collaborated with different teams to ensure planned features were delivered accordingly.",
        "Maintained the team’s E2E testing suite in Playwright by providing tests to ensure 100% coverage for our catchpoint tests as well as creating tests for some of the various features in our application.",
        "Developed multiple MFEs, allowing our central UI code base to be easier to manage and allowed other teams to be able to manage singular MFEs.",
        "Adopted and fully managed an existing process that translates and transforms the API into TypeScript. Implemented changes that fully automated the process using Jenkins and allowed notifications to team on the status of the process.",
        "Enhance Docker containers by detecting and addressing security vulnerabilities found. Also used npm audit to check for any package security vulnerabilities to ensure the application was security compliant.",
        "Led the deprecation of the previous pipeline process and worked with DevOps engineers with the creation of our current pipeline. Created documentation for the team that enabled teams to manage their pipelines."
      ]
  },
  {
    title: "Software Engineer",
    logo: concurLogo,
    company: "SAP Concur",
    type: 'Full-Time',
    years: "April 2020 - September 2021",
    experiences: [
      "Develop React based front-end applications with reusable react components and managed application state with redux. Tests application with unit testing and Cypress testing. Use New Relic to monitor application performance and enable CloudWatch to capture logs.",  
      "Designed and implemented new features for an existing application in React requested by customers. This resulted in the deprecation of the legacy application and improved end user experience.",
      "Streamlined internal workflows by developing an API in Python that sends data regarding health statuses of Concur services.",
      "Developed a bot in Slack using Python that provided an improvement in customer experience and enabled the deprecation of an older service.",
      "Led the creation of a design document that is used as a blueprint for our team in creating a new feature highly requested from our executive stakeholders.",
      "Worked with the latest cloud technologies / methodologies including: AWS DynamoDB, Cloud Formation, S3, EC2, SAP ID authentication, and agile software development."
    ]
  },
  {
    title: "Support Engineer, Software Engineer Intern",
    logo: sapNS2Logo,
    company: "SAP National Security Services",
    type: 'Full-Time, Internship',
    years: "March 2017 - April 2020",
    experiences: [
      "Led the Solution Manager internal upgrade project ensuring the SAP NS2 internal ticketing system was able to connect to the new SAP Support Backbone infrastructure.",
      "Performed SAP HANA Technical Performance Optimization Services that analyzed the current state of the customer’s HANA system and provided recommendations to optimize performance.",
      "Developed a reporting application using SAP Design Studio that displayed all NS2 customer’s critical incidents. Used HTML/CSS and BIAL scripting to add functionality and design to the dashboard. This dashboard was presented to NS2 executives on a monthly basis."
    ]
  }
]

export const linkedinLink = 'https://www.linkedin.com/in/sydnee-woodhouse-b74964122/'
export const githubLink = 'https://github.com/svwoodhouse'