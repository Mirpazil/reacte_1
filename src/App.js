import img1 from "./Logo.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} className="App-logo" alt="logo" />
        <h1>DESIGNZCY</h1>
        <ul>
          <li id="brown">Home</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
        <button>Contact us</button>
      </header>
    </div>
  );
}

export default App;
