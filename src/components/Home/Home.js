import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <section className="section section__home  section--fullheight">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <strong className="intro__span">Hey there,</strong>
                        <h1><span>My name is Mowmita Ahmed Chowdhury.</span><br/><span>I am a <span className="c--accent">full stack web developer</span> based in Dhaka, Bangladesh.</span></h1>
                        <p><span>Specialized in <strong>JavaScript</strong> with over 5 years of professional experience in building the web and working with technologies like</span></p>
                        <div class="intro__buttons">
                            <Link to="/projects"><button type="button" className="btn"><span className="btn__corner1"></span><span className="btn__corner2"></span><span className="btn__inner"><span className="btn__icon btn__icon--left"><svg width="25" height="25" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg></span><span className="btn__label">My portfolio</span></span></button></Link>
                            <Link href="/contact"><button type="button" className="btn"><span className="btn__corner1"></span><span className="btn__corner2"></span><span className="btn__inner"><span className="btn__icon btn__icon--left"><svg width="25" height="25" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></span><span className="btn__label">Get in touch</span></span></button></Link><span className="text-btn">or learn more&nbsp;<Link to="/about">about me.</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;