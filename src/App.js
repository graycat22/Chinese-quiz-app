import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizSetting from "./pages/quizSetting";
import QuizPage from "./pages/quizPage";
import VocaBook from "./pages/vocaBook";
import NotFound from "./pages/Error";
import NavBar from "./components/navBar";
import "./App.css";
import About from "./pages/About";

const App = () => {
  return (
    <div id="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/quiz-app" element={<Home />} />
        <Route path="/quizSetting" element={<QuizSetting />} />
        <Route path="/quizPage" element={<QuizPage />} />
        <Route path="/vocaBook" element={<VocaBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
