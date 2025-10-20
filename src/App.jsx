import "./app.css";
import Card from "./components/Card";

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
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <Card />
    </>
  );
}

export default App;
