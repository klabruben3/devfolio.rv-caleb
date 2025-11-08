import "./styles/app.css";

import Navigation from "./components/header/Navigation";
import ProjectCard from "./components/ProjectCard";
import IntroAnimation from "./components/effects/IntroAnimation";

// Assets
import cleanChase from "./assets/project_media/clean_chase.mp4";
import fastNote from "./assets/project_media/fastnote_2.0.png";
import pixelKombat from "./assets/project_media/pixel_kombat.png";
import ratingComponent from "./assets/project_media/rating-component.png";

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
            >
              VIEW PROJECTS
              <img src="arrow.png" alt="Right Arrow" width={15} />
            </a>
          </div>
          <IntroAnimation />
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
