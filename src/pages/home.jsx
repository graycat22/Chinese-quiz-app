import { NavLink } from "react-router-dom";
import { useMedia } from "react-use";

const Home = () => {
  const isIphone12 = useMedia("(max-width: 768px)");
  return (
    <>
      {isIphone12 ? (
        <>
          <h1>クイズアプリ</h1>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/"
              >
                ホーム
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/quizSetting"
              >
                クイズページ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/vocaBook"
              >
                単語帳
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <p>パソコン非対応です</p>
      )}
    </>
  );
};

export default Home;
