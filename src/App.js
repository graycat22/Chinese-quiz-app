import { Routes, Route, NavLink } from "react-router-dom";
import { useMedia } from "react-use";
import Home from "./pages/Home";
import QuizSetting from './pages/quizSetting';
import QuizPage from "./pages/quizPage";
import VocaBook from './pages/vocaBook';
import NotFound from "./pages/Error";
import './App.css';
import About from "./pages/About";

const App = () => {
  const isIphone12 = useMedia("(max-width: 768px)");
  return (
    <div id="App">
      { isIphone12 ?
        <>
          <h1>クイズアプリ</h1>
          <ul>
            <li>
              <NavLink 
                className={({ isActive }) => ( isActive ? "active" : undefined )}
                to="/"
              >
                ホーム
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => ( isActive ? "active" : undefined )}
                to="/quizSetting"
              >
                クイズページ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => ( isActive ? "active" : undefined )}
                to="/vocaBook"
              >
                単語帳
              </NavLink>
            </li>
          </ul>
        </>
        :
        <p>パソコン非対応です</p>
      }
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quizSetting" element={<QuizSetting />} />
        <Route path="/quizPage" element={<QuizPage />} />
        <Route path="/vocaBook" element={<VocaBook />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
