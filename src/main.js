import img2 from "./social-communication-3654546-3049735.svg";
import imgIcon from "./Icon.svg";
import imgIcon1 from "./Icon (1).svg";
import imgIcon2 from "./Icon happy client.svg";
function Main() {
  return (
    <div className="Main">
      <main className="Main-app">
        <div className="box1">
          <h1>Smart Web Design Agency</h1>
          <h2>
            We will provide best web design and business devlopment service
            clients expectation and satisfaction guarantee.
          </h2>
          <button>Free consultation</button>
          <img src={img2} className="App-logo" alt="logo" />
        </div>

        <div className="box2">
          <h1>We Provide the Best Web services</h1>
          <div className="boxing">
            <div className="boxes">
              <img src={imgIcon} className="App-logo" alt="logo" />
              <h3>5200+</h3>
              <p>Projects completed</p>
              <div class="vl"></div>
            </div>
            <div className="boxes">
              <img src={imgIcon1} className="App-logo" alt="logo" />
              <h3>500+</h3>
              <p>Active clients</p>
              <div class="vl"></div>
            </div>
            <div className="boxes">
              <img src={imgIcon2} className="App-logo" alt="logo" />
              <h3>4500+</h3>
              <p>Happy clients</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Main;
