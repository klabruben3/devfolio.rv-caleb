import "./styles/app.css";
import NavLink from "./components/NavLink";
import ProjectCard from "./components/ProjectCard";

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
        <nav>
          <NavLink linkName="Home" src="#" />
          <NavLink linkName="Projects" src="#" />
          <NavLink linkName="About" src="#" />
          <NavLink linkName="Contact" src="#" />
        </nav>
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
            <button className="projects">
              VIEW PROJECTS
              <img src="arrow.png" alt="Right Arrow" width={15} />
            </button>
          </div>
          <canvas id="intro-animation"></canvas>
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
              src="./src/assets/project_media/clean_chase.mp4"
              type="video"
              href="https://klabruben3.github.io/clean-chase/"
            />
            <ProjectCard
              title="Pixel Kombat"
              description="A retro-inspired arcade maze 
              game that pays homage to the classic Pac-Man"
              src="./src/assets/project_media/pixel_kombat.png"
              type="image"
              href="https://github.com/klabruben3/Pixel-Kombat/tree/main/genesis"
            />
            <ProjectCard
              title="FastNote 2.0"
              description="A minimal interactive task manager
              built with vanilla JavaScript, HTML, and CSS"
              src="./src/assets/project_media/fastnote_2.0.png"
              type="image"
              href="https://github.com/klabruben3/FastNote-2.0"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
