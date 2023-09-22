import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header id="header">
        <h2>等到有一天我会说中文</h2>
      </header>
      <div id="top">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/quizSetting"
            >
              <span>QUIZ</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/vocaBook"
            >
              <span>VOCABULARY</span>
            </NavLink>
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
