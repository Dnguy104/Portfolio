const data = {
  experience: [
    {
      title: 'Software Engineer',
      company: 'Fitzpo Inc.',
      current: true,
    },
    {
      title: 'Software Engineer Intern',
      company: 'Logitech',
      current: false,
    },
    {
      title: 'Research Associate',
      company: 'UC Riverse Machine Learning Lab',
      current: false,
    },
    {
      title: 'Teacher Assistant',
      company: 'UC Riverside Department of Computer Science',
      current: false,
    }
  ],
  projects: [
    {
      name: 'Dropp.It',
      link: 'https://github.com/Dnguy104/Dropp.it--Reddit-Clone',
      description: ['Fullstack Community Content Forum Appliication', 'Users can create accounts, create forums, post, comment, vote, and more!']
    },
    {
      name: 'Global Data Visualizer (HackPoly)​',
      link: 'https://devpost.com/software/ucr-population-data-visualizer',
      award: 'Wolfram Alpha Project Winner',
      description: ['An interactive 3d model that students can use to visualize the population of',
      'cities by utilizing WebGL to create a 3D model of a globe and Wolfram Alpha API',
       'to display any selected citys statistical data.'
     ]
    },
    {
      name: 'CrowdTrack (SBHacks)​',
      link: 'https://devpost.com/software/crowd-tracker',
      award: 'IBM IoT Project Winner ',
      description: ['Utilized the IBM IoT platform to gather and display real-time location data from',
      'hundreds of devices to help event planners visualize bottlenecks and assist in', 'crowd control.']
    },
  ],
  skills: [
    ['Frontend', 'Javascript, ES6/7, React.js, Styled-Components, Redux, React Native, Html5, CSS3, Jest/Enzyme, apollo client'],
    ['Backend', 'Python, Django, NodeJS, Flask, C++, Electron, MySQL, GraphQL, Kubernetes'],
    ['Other', 'AWS, Git, GitLab, npm, yarn, REST API design, Object Oriented Programming, SCRUM Methodology']
  ]

};

export default data
