import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { noun, verb, adjective, adverbs } from "../library/wordBank";
import QuizPage from "./quizPage";

const QuizSetting = () => {
  const [quantityValue, setQuantityValue] = useState(20);
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
    const newValue = parseInt(e.target.value, 10);
    setQuantityValue(newValue);
    console.log(newValue);
  };

  const handleCheckboxChange = (setStateFunction, prevValue) => {
    setStateFunction((prevValue) => !prevValue);
  };

  const handleStartQuiz = (noun_, verb_, adjective_, adverbs_) => {
    const quizArray = [];

    if (isNounSelected) {
      quizArray.push(...noun);
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
      <>
        <h2>クイズを出題するよ</h2>
      </>
      <>
        <div>
          <label htmlFor="quantity">
            問題数設定
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="1014"
              step="1"
              value={quantityValue}
              onChange={handleQuantityChange}
            />
            <span class="spinner spinner-down">-</span>
            <span class="spinner spinner-up">+</span>
          </label>
        </div>
        <div>
          <label>
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
          <label>
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
          <label>
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
          <label>
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
        <button onClick={handleStartQuiz}>開始</button>
      </>
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
