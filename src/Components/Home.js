import "../Shared/Styles.css";
import vector from "../assets/web.webp";
function Home() {
  return (
    <div id="intro" className="section dark1">
      <div className="container">
        <div className="section-flex intro">
          <div className="section-right">
            <p className="weight-light">Hello, My name is</p>
            <h1 className="color-primary">Samruddhi Gorghate</h1>
            <h3 className="color-white">Software Developer</h3>
          </div>
          <div className="section-left">
            <img src={vector} alt="intro" className="moving-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
