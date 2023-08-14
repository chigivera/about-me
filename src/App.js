import "./App.css";
import Container from "./components/Container";
import Biography from "./components/Biography";
import PdfReader from "./components/PdfReader";
import Links from "./components/Links";
import Pitch from "./components/Pitch";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Biography />
      </header>
      <main className="App-main">
        <Container>
          <iframe
            title="YouTube Video"
            width="80%" // Set width to 100%
            height="80%" // Set height to 100%
            src="https://www.youtube.com/embed/XkNIN0M4UZA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <PdfReader />
        </Container>
        <Container>
          <Pitch />
        </Container>
        <Container>
          <h2   style={{color:"white"}}>Follow me</h2>
          <Links />

          <Contact />
        </Container>
      </main>
      <footer className="App-footer">
        <p
          style={{color:"white"}}
        >
          &copy; 2023 Your Company
        </p>
      </footer>
    </div>
  );
}

export default App;
