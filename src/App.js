import "./App.css";
import Container from "./components/Container";
import Biography from "./components/Biography";
import Links from "./components/Links";
import Pitch from "./components/Pitch";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Biography />
      </header>
      <main className="App-main">
        <Container>
          <Pitch />
        </Container>
        <Container>
          <Links/>
        </Container>
       
      </main>
      <footer className="App-footer">
        <p
          style={{color:"white"}}
        >
          &copy; 2024
        </p>
      </footer>
    </div>
  );
}

export default App;
