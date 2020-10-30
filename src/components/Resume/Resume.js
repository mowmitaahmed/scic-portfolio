import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="section section__contact section--fullheight">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h3>Skills</h3>
                        <button className="btn btn-success rounded mr-2 mb-2">JavaScript</button>
                        <button className="btn btn-success rounded mr-2 mb-2">ES6</button>
                        <button className="btn btn-success rounded mr-2 mb-2">ReactJs</button>
                        <button className="btn btn-success rounded mr-2 mb-2">NodeJs</button>
                        <button className="btn btn-success rounded mr-2 mb-2">ExpressJs</button>
                        <button className="btn btn-success rounded mr-2 mb-2">MogoDb</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Mongoose</button>
                        <button className="btn btn-success rounded mr-2 mb-2">React Router</button>
                        <button className="btn btn-success rounded mr-2 mb-2">React Bootstrap</button>
                        <button className="btn btn-success rounded mr-2 mb-2">React Hook Form</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Google Map API</button>
                        <button className="btn btn-success rounded mr-2 mb-2">REST API</button>
                        <button className="btn btn-success rounded mr-2 mb-2">SASS</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Material-UI</button>
                        <button className="btn btn-success rounded mr-2 mb-2">HTML</button>
                        <button className="btn btn-success rounded mr-2 mb-2">CSS</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Bootstrap</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Stripe Payment Gateway</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Firebase Hosting, Authentication</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Netlify</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Heroku</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Git</button>
                        <button className="btn btn-success rounded mr-2 mb-2">GitHub</button>
                        <button className="btn btn-success rounded mr-2 mb-2">VS Code</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Chrome Dev Tools</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Trello</button>
                        <button className="btn btn-success rounded mr-2 mb-2">Data Structure</button>
                        <button className="btn btn-success rounded mr-2 mb-2">OOP</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <h4>Download the Resume</h4>
                                <a target="_blank" href="https://drive.google.com/file/d/1x_A9FgpkzyTTiSxN7iGo7Vtw3uNpCypM/view?usp=sharing" className="nav-link">
                                   <img src="https://freeiconshop.com/wp-content/uploads/edd/download-flat.png" alt="app-entwickler-verzeichnis" width="40" height="40" align="middle" />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Experiences</h3>
                                <p className="mb-0"><span className="font-weight-bold">Software Engineer(Intern)</span>  – <span className="text-secondary">ACCESS TECH BD</span></p> 
                                <p className="text-secondary">SEPTEMBER 2017 – DECEMBER 2017</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;