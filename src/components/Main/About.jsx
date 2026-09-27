import React from 'react';
import '../../pages/About/AboutPage.css'
import cv from '../../cv/cv.pdf';


import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is AbdelKarim Doudey and I am a full stack developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I have been working on web designing and web development for 2 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            22
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Chess, Football and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> abdelkarim.doudey@ensi-uma.tn</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Tunisian,tataouine
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>CI/CD & Conteneurs</h4>
                <div className="skill">
                    <div>
                        <img alt="Docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" title="Docker" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="Kubernetes" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" title="Kubernetes" />
                        <h5>Kubernetes</h5>
                    </div>
                    <div>
                        <img alt="GitHub Actions" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" title="GitHub Actions" />
                        <h5>GitHub Actions</h5>
                    </div>
                    <div>
                        <img alt="Argo CD" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" title="Argo CD" />
                        <h5>Argo CD</h5>
                    </div>
                </div>
                <h4>Infrastructure & Cloud</h4>
                <div className="skill">
                    <div>
                        <img alt="Terraform" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" title="Terraform" />
                        <h5>Terraform</h5>
                    </div>
                    <div>
                        <img alt="AWS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="AWS" />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="Linux" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" />
                        <h5>Linux</h5>
                    </div>
                </div>
                <h4>Monitoring & Automatisation</h4>
                <div className="skill">
                    <div>
                        <img alt="Prometheus" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" title="Prometheus" />
                        <h5>Prometheus</h5>
                    </div>
                    <div>
                        <img alt="Grafana" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" title="Grafana" />
                        <h5>Grafana</h5>
                    </div>
                    <div>
                        <img alt="Ansible" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" title="Ansible" />
                        <h5>Ansible</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="GitHub" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" title="GitHub" />
                        <h5>GitHub</h5>
                    </div>
                    <div>
                        <img alt="NestJS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" title="NestJS" />
                        <h5>NestJS</h5>
                    </div>
                    <div>
                        <img alt="Angular" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" title="Angular" />
                        <h5>Angular</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);