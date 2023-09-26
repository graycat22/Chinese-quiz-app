import { Link } from "react-router-dom";
import ChineseOldBuildingPc from "../images/ChineseOldBuilding-pc.jpg";
import ChineseOldBuildingSp from "../images/ChineseOldBuilding-pc.jpg";

const Home = () => {
  return (
    <div id="home">
      <header id="header">
        <h2>等到有一天我会说中文</h2>
      </header>
      <main id="main">
        <picture>
          <source media="(max-width: 768px)" srcSet={ChineseOldBuildingSp} />
          <img src={ChineseOldBuildingPc} alt="Chinese Building" />
        </picture>
        <nav class="menu-nav">
          <ul>
            <li>
              <Link to="/quizSetting">
                <span>QUIZ&emsp;&emsp;&emsp;&emsp;</span>
              </Link>
            </li>
            <li>
              <Link to="/vocaBook">
                <span>VOCABULARY</span>
              </Link>
            </li>
            <li>
              <Link to="/navbar">
                <span>DUMMY</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link to="/error">
                <span>ComingSoon...</span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <hooter className="footer">
        <div className="button">
          <div className="icon">
            <i className="fab fa-twitter"></i>
          </div>
          <span>
            <a
              href="http://www.x.com/elonmusk"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-youtube"></i>
          </div>
          <span>
            <a
              href="http://www.youtube.com/@comdot"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <span>
            <a
              href="http://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          </span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-github"></i>
          </div>
          <span>
            <a
              href="http://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PornHub
            </a>
          </span>
        </div>
      </hooter>
    </div>
  );
};

export default Home;
