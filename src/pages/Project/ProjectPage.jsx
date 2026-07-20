import React from 'react';
import './ProjectPage.css';
import projects from '../../data/projects';

const kebabCase = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ProjectCard = ({ project }) => (
  <div className="pj-card">
    <a
      href={project.link || project.github}
      target="_blank"
      rel="noreferrer"
      className="pj-image-wrapper"
    >
      <img className="pj-image" src={project.img} alt={project.title} />
    </a>
    <div className="pj-content">
      <div className="pj-header">
        <a href={project.link || project.github} target="_blank" rel="noreferrer">
          <h3>{project.title}</h3>
        </a>
        <div className="pj-icons">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
      <p>{project.desc}</p>
      <ul className="pj-tags">
        {project.tags.map((tag) => (
          <li key={tag} className="pj-tag" data-tag={kebabCase(tag)}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectPage = () => {
  return (
    <div className="projects-page">
      <div className="pj-heading">
        <h1>
          Projects
          <img
            className="pj-doodle"
            src="https://raw.githubusercontent.com/BraydenTW/braydentw.io/main/public/static/doodles/hero/code.svg"
            alt=""
          />
        </h1>
        <p>
          J'ai créé des applications et des sites web avec des technologies allant
          de HTML à React. Voici quelques-uns de mes projets favoris au fil de mon parcours.
        </p>
      </div>

      <div className="pj-grid">
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>

      <p className="pj-more">
        Retrouve-en encore plus sur{" "}
        <a href="https://github.com/TON-USERNAME" target="_blank" rel="noreferrer">
          mon GitHub
        </a>
        !
      </p>
    </div>
  );
};

export default ProjectPage;