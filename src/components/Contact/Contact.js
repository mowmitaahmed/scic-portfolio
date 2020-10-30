import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="section section__contact section--fullheight">
            <div className="container">
                <h1>Get in touch</h1>
                <div className="row">
                    <div class="col-md-6">
                        <p>Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</p>
                        <ul>
                            <li>Email:&nbsp;<strong><a href="mailto:ahmedmowmita@gmail.com">ahmedmowmita@gmail.com</a></strong></li>
                            <li>LinkedIn:&nbsp;<strong><a href="https://www.linkedin.com/in/mowmitaahmed/" target="_blank" rel="noopener noreferrer">Mowmita Ahmed Chowdhury</a></strong></li>
                            <li>GitHub:&nbsp;<strong><a href="https://github.com/mowmitaahmed" target="_blank" rel="noopener noreferrer">mowmitaahmed</a></strong></li>
                        </ul>
                        <p>You can also use the contact form on this page.</p>
                        
                        <ul class="list-inline list-social-icons mb-0">
                            <li class="list-inline-item">
                                <a href="https://www.facebook.com/mowmita.ahmed2/" target="_blank">
                                    <img src="https://i.pinimg.com/564x/6e/73/2b/6e732beb65774ba42c65fadd8c6c623a.jpg" alt="app-entwickler-verzeichnis" width="56" height="56" align="middle" />
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://www.linkedin.com/in/mowmitaahmed/" target="_blank">
                                    <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" alt="app-entwickler-verzeichnis" width="48" height="48" align="middle" />
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="https://github.com/mowmitaahmed" target="_blank" title="iPhone-Android-Entwicklung">
                                    <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="app-entwickler-verzeichnis" width="48" height="48" align="middle" />
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <form action="mailto:ahmedmowmita@gmail.com" method="POST" enctype="text/plain" class="contact__form shadow-lg py-5 px-4 rounded">
                            <div class="contact__form-inner ">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input class="form__control" name="contact_fullname" type="text" placeholder="Enter your full name..." aria-required="true" aria-invalid="false" required />
                                    </div>
                                    <div class="col-md-6">
                                        <input class="form__control" name="contact_email" type="email" placeholder="Enter your email..." aria-required="true" aria-invalid="false" required />
                                    </div>
                                </div>
                                <textarea class="form__control" name="contact_message" placeholder="Enter your message..." rows="5" aria-required="true" aria-invalid="false" required></textarea>
                                <button type="submit" class="btn btn--md ">
                                <span class="btn__corner1"></span>
                                <span class="btn__corner2"></span>
                                <span class="btn__inner"><span class="btn__icon "><svg width="25" height="25" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M19.354 10.146l-6-6c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.146 5.146h-16.293c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h16.293l-5.146 5.146c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l6-6c0.195-0.195 0.195-0.512 0-0.707z"></path></svg></span><span class="btn__label">Send message</span></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;