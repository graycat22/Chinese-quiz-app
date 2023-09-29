import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import vocabulary, {
  noun,
  verb,
  adjective,
  adverbs,
} from "../library/wordBank";

const QuizSetting = () => {
  const [quantity, setQuantity] = useState(1);
  const [isN, setIsN] = useState(false);
  const [isAdj, setIsAdj] = useState(false);
  const [isAdv, setIsAdv] = useState(false);
  const [isV, setIsV] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const NTbutton = isN ? "button selected" : "button";
  const AdjTbutton = isAdj ? "button selected" : "button";
  const AdvTbutton = isAdv ? "button selected" : "button";
  const VTbutton = isV ? "button selected" : "button";

  const handleQuantity = (event) => {
    const settedValue = parseInt(event.target.value, 10);
    if (isNaN(settedValue) || settedValue < 1) {
      setErrorMessage("少なすぎます");
      setShowPopup(true);
      setQuantity(1);
    } else if (settedValue > vocabulary.length) {
      setErrorMessage("多すぎます");
      setShowPopup(true);
      setQuantity(vocabulary.length);
    } else {
      setQuantity(settedValue);
    }
  };

  const Popup = () => {
    const handleClick = () => {
      setShowPopup(false);
    };

    return (
      <div className="popup-overlay" onClick={handleClick}>
        <div className="popup">{errorMessage}</div>
      </div>
    );
  };

  const startQuiz = () => {
    const quizArray = [];

    if (isN) {
      const noun_ = [...noun];
      shuffleArray(noun_);
      const halfNoun = noun_.slice(0, noun.length / 3.2);
      quizArray.push(...halfNoun);
    }

    if (isV) {
      quizArray.push(...verb);
    }
    if (isAdj) {
      quizArray.push(...adjective);
    }

    if (isAdv) {
      quizArray.push(...adverbs);
    }

    if (!isN && !isV && !isAdj && !isAdv) {
      alert("少なくとも1つは選択してください");
      return;
    } else {
      const randomArray = [...quizArray];
      shuffleArray(randomArray);
      const shuffledArray = getRandomArray(quizArray, quantity);
      navigate("/quizPage", {
        state: { quantity, quizArray: shuffledArray, randomArray },
      });
    }
  };

  return (
    <>
      <div className="navi-relative">
        {showPopup && <Popup />}
        <div className="quiz-quantity">
          <span
            onClick={() => handleQuantity({ target: { value: quantity - 1 } })}
          >
            －
          </span>
          <input
            name="quantity"
            pattern="^[1-9][0-9]*$"
            inputMode="numeric"
            value={quantity}
            min="1"
            max={vocabulary.length}
            onChange={handleQuantity}
          />
          <span
            onClick={() => handleQuantity({ target: { value: quantity + 1 } })}
          >
            ＋
          </span>
        </div>
        <div className="navi-absolute">
          <div className="navbar">
            <div className={NTbutton} onClick={() => setIsN(!isN)}>
              <div className="icon">名詞</div>
              <span>{noun.length} 問</span>
            </div>
            <div className={AdjTbutton} onClick={() => setIsAdj(!isAdj)}>
              <div className="icon">形容詞</div>
              <span>{adjective.length} 問</span>
            </div>
            <div className={AdvTbutton} onClick={() => setIsAdv(!isAdv)}>
              <div className="icon">副詞</div>
              <span>{adverbs.length} 問</span>
            </div>
            <div className={VTbutton} onClick={() => setIsV(!isV)}>
              <div className="icon">動詞</div>
              <span>{verb.length} 問</span>
            </div>
          </div>
          <div className="start-button" onClick={startQuiz}>
            <button>開始</button>
          </div>
          <div className="back-button">
            <Link to="/">戻る</Link>
          </div>
        </div>
      </div>
    </>
  );
};

const getRandomArray = (array, n) => {
  const shuffledArray = [...array];
  for (let i = 0; i < n * Math.log(n); i++) {
    shuffleArray(shuffledArray);
  }
  return shuffledArray.slice(0, n);
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default QuizSetting;
