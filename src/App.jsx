import "./styles/app.css";

import Navigation from "./components/header/Navigation";
import ProjectCard from "./components/ProjectCard";
import IntroAnimation from "./components/effects/IntroAnimation";

// Assets
import cleanChase from "./assets/project_media/clean_chase.mp4";
import fastNote from "./assets/project_media/fastnote_2.0.png";
import pixelKombat from "./assets/project_media/pixel_kombat.png";
import ratingComponent from "./assets/project_media/rating-component.png";
import cv from "./assets/doc/Ruben_Caleb_SoftwareDeveloper_CV.pdf";

function App() {
  return (
    <>
      <header>
        <img src="rv_logo.svg" width={64} alt="rv_logo" />
        <p>
          <span>Ruben Caleb</span>
          <br />
          Software Developer
        </p>
        <Navigation />
      </header>
      <main>
        <section id="introduction">
          <div className="description">
            <h1>
              BUILDING DIGITAL
              <br />
              EXPERIENCES
            </h1>
            <p>
              <span>Software Developer</span> | React.js | c++
            </p>
            <a
              className="projects"
              href="https://github.com/klabruben3"
              target="_blank"
              aria-label="View Projects"
            >
              GitHub
              <img src="arrow.png" alt="Right Arrow" width={15} />
            </a>
            <br />
          </div>
          <IntroAnimation />
          <p className="about">
            Hey, I’m Ruben Caleb. I study Computer Science & Mathematics at
            North‑West University and build fast, interactive web experiences,
            mostly with React.js, JavaScript, and C++. I care about clean UX,
            simple performance, and code that’s easy to maintain. I love turning
            messy problems into clear, usable tools.
            <br />
            <br />
            Lately, I’ve been diving into game development with Godot and
            exploring Python projects, while keeping my web and C++ skills sharp
            through personal projects and prototypes.
          </p>

          <ul className="prof-links">
            <li>
              <a
                target="_blank"
                href="https://github.com/klabruben3?tab=repositories"
              >
                GitHub Repos
              </a>
            </li>
            <li>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                Download cv
              </a>
            </li>
          </ul>
        </section>
        <hr />
        <section id="recent-projects">
          <h2>Recent Projects</h2>
          <div className="projects">
            <ProjectCard
              title="Clean Chase"
              description="Minimal JavaScript animation that simulates
               a chain of circles following a randomly
               moving target across the canvas"
              src={cleanChase}
              type="video"
              href="https://klabruben3.github.io/clean-chase/"
            />
            <ProjectCard
              title="Pixel Kombat"
              description="A retro-inspired arcade maze game that
              reimagines the spirit of Pac-Man with modern twists and smooth gameplay"
              src={pixelKombat}
              type="image"
              href="https://github.com/klabruben3/Pixel-Kombat/tree/main/genesis"
            />
            <ProjectCard
              title="FastNote 2.0"
              description="A minimal interactive task manager built with pure JavaScript,
              HTML, and CSS to organize and track daily goals"
              src={fastNote}
              type="image"
              href="https://klabruben3.github.io/FastNote-2.0/src"
            />
            <ProjectCard
              title="Rating Component"
              description="A clean and engaging user interface that collects feedback
              through a smooth, intuitive two-step interaction process"
              src={ratingComponent}
              type="image"
              href="https://klabruben3.github.io/interactive-rating-component/"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
