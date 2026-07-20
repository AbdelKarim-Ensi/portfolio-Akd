import React from "react";
import "./FavoriteProjects.css";
import { projects } from "../../data/projects";

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const FavoriteProjects = () => {
  return (
    <section className="favorite-projects">
      <div className="favorite-projects__container">

        {/* EN-TÊTE */}
        <div className="favorite-projects__header">
          <h2 className="favorite-projects__title">
            Here are a few of my favorite projects.
          </h2>
          <div className="favorite-projects__line"></div>
        </div>

        {/* GRILLE */}
        <div className="favorite-projects__grid">
          {projects.map((project) => (
            <div className="project-card-fp" key={project.id}>
              <div className="project-card-fp__img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-fp__img"
                />
              </div>

              <div className="project-card-fp__top">
                <h3 className="project-card-fp__title">{project.title}</h3>
                <div className="project-card-fp__links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalIcon />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-card-fp__desc">{project.description}</p>

              <div className="project-card-fp__tags">
                {project.tags.map((tag, i) => (
                  <span className="project-card-fp__tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOUTON */}
        <div className="favorite-projects__button-wrapper">
          <a href="/project" className="favorite-projects__button">
            View All
          </a>
        </div>

      </div>
    </section>
  );
};

export default FavoriteProjects;