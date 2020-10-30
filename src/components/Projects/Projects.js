import React from 'react';
import './Projects.css';
import Creative from '../../images/logos/creative.png';
import Travel from '../../images/logos/travel.png';
import Volunteer from '../../images/logos/volunteer.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SingleProjects from '../SingleProjects/SingleProjects';

const projectData = [
    {
        name : 'Creative Agency ',
        description : 'A Full Stack Creative Agency App where users can place an order, can view own order lists, Leave reviews. And admin can view order lists ordered by users, add new services.',
        technologies : 'React Js, React Router, Node.js, MongoDB, Mongoose, Firebase Authentication, Heroku, Bootstrap',
        img : Creative,
        website: 'https://creative-agency-35c16.firebaseapp.com/',
        github: 'https://github.com/mowmitaahmed/creative-agency-client'
    },
    {
        name : 'Travel Guru',
        description : 'Travel Guru is a Front End App where visitors can select a place from slider from home page and place an booking button. It’ll redirect the user to booking form where the visitor can start booking after login. After login from this page visitors profile will show hotels from the travel place and show the place in map.',
        technologies : 'React Js, React Router, Firebase Authentication, Bootstrap',
        img : Travel,
        website: 'https://travel-guru-289908.firebaseapp.com/',
        github: 'https://github.com/mowmitaahmed/travel-guru-react'
    },
    {
        name : 'Online Courses',
        description : 'A simple front-end react app of an online courses website where can visitors can view all courses and can enroll and can see total price of all the courses.',
        technologies : 'React Js, JavaScript, ES6, Bootstrap, Netlify',
        img : 'https://image.flaticon.com/icons/png/512/103/103337.png',
        website: 'https://onlinecoursemowmita.netlify.app/',
        github: 'https://github.com/mowmitaahmed/online_class'
    },
    {
        name : 'Volunteer Network',
        description : 'A Full Stack Volunteer Network App',
        technologies : 'React Js, React Router, Node.js, MongoDB, Mongoose, Firebase Authentication, Heroku, Bootstrap',
        img : Volunteer,
        website: 'https://volunteer-network-da938.web.app/',
        github: 'https://github.com/mowmitaahmed/volunteer-netw-client'
    },
    {
        name : 'Social Media',
        description : 'A simple React app of Social Media where users can see comments and posts',
        technologies : 'React Js, React Router, Material-UI, Netlify',
        img : 'https://www.pinclipart.com/picdir/middle/126-1266771_post-page-to-add-pictures-comments-add-post.png',
        website: 'https://socialpostsassignment.netlify.app/',
        github: 'https://github.com/mowmitaahmed/social_posts'
    }
]

const Projects = () => {
    return (
        <div className="section section__contact section--fullheight">
            <div className="container">
                <h1 className="mb-5">Projects</h1>
                <div className="row">
                <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>
                    {
                        projectData.map(project => <SingleProjects project={project}></SingleProjects>)
                    }
                </OwlCarousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;