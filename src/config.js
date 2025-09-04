// Configuration for API endpoints
const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:5050',
  SITE_NAME: 'Shubham Silyan Portfolio',
  SOCIAL_LINKS: {
    linkedin: 'https://www.linkedin.com/in/shubhamsilyan/',
    github: 'https://github.com/shubhamsilyan',
    twitter: 'https://x.com/shubham_silyan',
    facebook: 'https://www.facebook.com/shubh7silyan',
    instagram: 'https://www.instagram.com/shubh7silyan/',
    email: 'mailto:shubham7silyan@gmail.com',
    whatsapp: 'https://wa.me/7814448027'
  },
  PROJECTS: {
    htmlCss: [
      {
        title: 'Consultant Website Template',
        tech: 'HTML5, CSS3',
        link: 'https://github.com/shubhamsilyan/consultant-website',
        demo: 'https://consultant-template.netlify.app'
      },
      {
        title: 'W3School Website Clone',
        tech: 'HTML5, CSS3',
        link: 'https://github.com/shubhamsilyan/w3school-clone',
        demo: 'https://w3school-clone.netlify.app'
      }
    ],
    bootstrap: [
      {
        title: 'Portfolio Template',
        tech: 'Bootstrap',
        link: 'https://github.com/shubhamsilyan/portfolio-bootstrap',
        demo: 'https://portfolio-bootstrap.netlify.app'
      },
      {
        title: 'Institute Website Template',
        tech: 'Bootstrap',
        link: 'https://github.com/shubhamsilyan/institute-website',
        demo: 'http://sanjayverma.netlify.app'
      }
    ]
  }
};

export default config;
