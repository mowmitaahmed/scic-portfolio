import React from 'react';
import Creative from '../../images/logos/creative.png';
import Travel from '../../images/logos/travel.png';
import Volunteer from '../../images/logos/volunteer.png';

const SingleProjects = ({project}) => {
    return (
        <div className="item">
            <div className="col-md-12">
                <div className="row shadow-lg py-5 px-3 rounded">
                    <div className="col-md-8">
                        <h5 className="card-title font-weight-bold">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <p><span className="text-success  font-weight-bold">Technologies:  </span>{project.technologies}</p>
                    </div>
                    <div className="col-md-4">
                        <img className="card-img-top w-75 mb-5" src={project.img} alt={project.img} />
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <a href={project.website} target="_blank" type="button" class="btn btn-success rounded mr-2">Website</a>
                            <a href={project.github} target="_blank" type="button" class="btn btn-secondary rounded mr-2">GitHub</a>                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProjects;