import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import vocabulary, {
  noun,
  verb,
  adjective,
  adverbs,
} from "../library/wordBank";

const NavBar = () => {
  return (
    <div className="navi-relative">
      <div className="navi-absolute">
        <div className="navbar">
          <div className="button">
            <div className="icon">名詞</div>
            <span>出題するよ</span>
          </div>
          <div className="button">
            <div className="icon">形容詞</div>
            <span>出題するよ</span>
          </div>
          <div className="button">
            <div className="icon">副詞</div>
            <span>出題するよ</span>
          </div>
          <div className="button">
            <div className="icon">動詞</div>
            <span>出題するよ</span>
          </div>
        </div>
        <div className="start-button">
          <button>開始</button>
        </div>
        <div className="back-button">
          <Link to="/">戻る</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
