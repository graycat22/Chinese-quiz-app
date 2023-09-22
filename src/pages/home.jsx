import { Link } from "react-router-dom";
import ChineseOldBuildingPc from "../images/ChineseOldBuilding-pc.jpg";
import ChineseOldBuildingSp from "../images/ChineseOldBuilding-pc.jpg";

const Home = () => {
  return (
    <>
      <header id="header">
        <h2>等到有一天我会说中文</h2>
      </header>
      <div id="main">
        <picture>
          <source media="(max-width: 600px)" srcSet={ChineseOldBuildingSp} />
          <img src={ChineseOldBuildingPc} alt="Chinese Building" />
        </picture>
        <ul>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/quizSetting"
            >
              <span>QUIZ</span>
            </Link>
          </li>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </Link>
          </li>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </Link>
          </li>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </Link>
          </li>
          <li>
            <Link
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </Link>
          </li>
        </ul>
      </div>
      <hooter>
        <div className="button">
          <div className="icon">
            <i className="fab fa-twitter"></i>
          </div>
          <span>X</span>
        </div>
        <div className="button">
          <div className="icon">
            <i className="fab fa-youtube"></i>
          </div>
          <span>YouTube</span>
        </div>
      </hooter>
    </>
  );
};

export default Home;
