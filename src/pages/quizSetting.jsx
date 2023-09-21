import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vocabulary, {
  noun,
  verb,
  adjective,
  adverbs,
} from "../library/wordBank";
import "../App.css";

const QuizSetting = () => {
  const [quantityValue, setQuantityValue] = useState(5);
  const [isIncreasing, setIsIncreasing] = useState(false);
  let timeout;
  const [isNounSelected, setIsNounSelected] = useState(true);
  const [isVerbSelected, setIsVerbSelected] = useState(true);
  const [isAdjSelected, setIsAdjSelected] = useState(true);
  const [isAdvSelected, setIsAdvSelected] = useState(true);
  const navigate = useNavigate();

  console.log(isNounSelected);
  console.log(isVerbSelected);
  console.log(isAdjSelected);
  console.log(isAdvSelected);

  const handleQuantityChange = (e) => {
    const settedValue = parseInt(e.target.value, 10);
    if (isNaN(settedValue)) {
      alert("数字を入力してください");
    } else if (settedValue > vocabulary.length) {
      alert("問題数が多すぎます");
      setQuantityValue(vocabulary.length);
    } else {
      setQuantityValue(settedValue);
    }
  };

  const handleMouseDown = () => {
    setIsIncreasing(true);

    timeout = setInterval(() => {
      handleQuantityChange({ target: { value: quantityValue + 1 } });
    }, 200);

    handleQuantityChange({ target: { value: quantityValue + 1 } });
  };

  const handleMouseUp = () => {
    setIsIncreasing(false);
    clearInterval(timeout);
  };

  const handleCheckboxChange = (setStateFunction, prevValue) => {
    setStateFunction((prevValue) => !prevValue);
  };

  const handleStartQuiz = (noun_, verb_, adjective_, adverbs_) => {
    const quizArray = [];

    if (isNounSelected) {
      const noun$ = [...noun];
      shuffleArray(noun$);
      const halfNoun = noun$.slice(0, noun.length / 3.2);
      quizArray.push(...halfNoun);
      console.log(halfNoun.length);
    }

    if (isVerbSelected) {
      quizArray.push(...verb);
    }

    if (isAdjSelected) {
      quizArray.push(...adjective);
    }

    if (isAdvSelected) {
      quizArray.push(...adverbs);
    }

    if (
      !isNounSelected &&
      !isVerbSelected &&
      !isAdjSelected &&
      !isAdvSelected
    ) {
      if ("vibrate" in navigator) {
        navigator.vibrate([500]);
      }
      alert("少なくとも1つのオプションを選択してください");
      return;
    } else {
      const randomArray = [...quizArray];
      shuffleArray(randomArray);
      console.log("Settingのランダム配列：", randomArray);
      const shuffledArray = getRandomArray(quizArray, quantityValue);
      navigate("/quizPage", {
        state: { quantityValue, quizArray: shuffledArray, randomArray },
      });
    }
  };

  return (
    <>
      <h2>クイズを出題するよ</h2>
      <p>問題数設定</p>
      <div>
        <label className="number-spinner-wrap" htmlFor="quantity">
          <input
            className="number-spinner-input"
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="1014"
            step="1"
            value={quantityValue}
            onChange={handleQuantityChange}
          />
          <span
            className="spinner spinner-down"
            onClick={() =>
              handleQuantityChange({ target: { value: quantityValue - 1 } })
            }
          >
            -
          </span>
          <span
            className="spinner spinner-up"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            +
          </span>
        </label>
      </div>
      <div className="check-label-wrap">
        <div>
          <label className="check-label check-noun">
            <input
              type="checkbox"
              id="noun"
              checked={isNounSelected}
              onChange={() =>
                handleCheckboxChange(setIsNounSelected, isNounSelected)
              }
            />
            名詞
          </label>
        </div>
        <div>
          <label className="check-label check-verb">
            <input
              type="checkbox"
              id="verb"
              checked={isVerbSelected}
              onChange={() =>
                handleCheckboxChange(setIsVerbSelected, isVerbSelected)
              }
            />
            動詞
          </label>
        </div>
        <div>
          <label className="check-label check-adj">
            <input
              type="checkbox"
              id="adjective"
              checked={isAdjSelected}
              onChange={() =>
                handleCheckboxChange(setIsAdjSelected, isAdjSelected)
              }
            />
            形容詞
          </label>
        </div>
        <div>
          <label className="check-label check-adv">
            <input
              type="checkbox"
              id="adverbs"
              checked={isAdvSelected}
              onChange={() =>
                handleCheckboxChange(setIsAdvSelected, isAdvSelected)
              }
            />
            副詞
          </label>
        </div>
      </div>
      <div className="start-button">
        <button onClick={handleStartQuiz}>開始</button>
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
