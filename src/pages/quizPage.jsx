import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { shuffleArray } from "./quizSetting";

const QuizPage = () => {
  const { state } = useLocation();
  const {
    quantity,
    quizArray: initialQuizArray,
    randomArray: initialRandomArray,
  } = state;
  const quizArray = initialQuizArray;
  const [showContent, setShowContent] = useState(true);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null);
  const [mistakes, setMistakes] = useState([]);

  // randomArrayはSettingのquizArrayと同じ。つまりユーザが選んだ品詞の全単語が入ってる。
  const randomArray = initialRandomArray.filter(
    (item) => item.品詞 === quizArray[currentQuizIndex].品詞
  );
  //問題の品詞と同じ品詞の単語を抽出して配列化
  console.log("品詞", randomArray, initialRandomArray);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  //偽回答を生成
  const getFakeAnswer = () => {
    const fakeArray = [];
    for (let i = 0; i < 4; i++) {
      const randomNum = getRandomInt(randomArray.length);
      const randomObj = randomArray[randomNum];
      fakeArray.push(randomObj);
    }
    const randomArray_ = [...fakeArray];
    console.log("randomArray_:", randomArray_);
    if (
      !fakeArray.some((item) => item.単語 === quizArray[currentQuizIndex].単語)
    ) {
      fakeArray.splice(3, 1, quizArray[currentQuizIndex]);
      console.log("挿入！");
    } else {
      const indexToSwap = fakeArray.findIndex(
        (item) => item.単語 === quizArray[currentQuizIndex].単語
      );
      [fakeArray[3], fakeArray[indexToSwap]] = [
        fakeArray[indexToSwap],
        fakeArray[3],
      ];
      console.log("入れ替え！");
    }
    console.log("fakearray:", fakeArray);
    const slicedArray = fakeArray.slice(0, 4);

    shuffleArray(slicedArray);
    console.log("slicedarray:", slicedArray);
    return slicedArray;
  };

  const fakeArray = getFakeAnswer();
  console.log("最終的なfakearray...", fakeArray);

  //答えを受信
  const handleSendAnswer = (meaning, yourAnserIndex) => {
    const isLastQuiz = currentQuizIndex === quantity - 1;
    const newMistakes = [...mistakes];

    if (meaning === "next") {
      if (isLastQuiz) {
        setShowContent(false);
      } else {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setIsSelected(!isSelected);
        setIsCorrect(null);
      }
    } else {
      const isCorrectAnswer = meaning.意味 === quizArray[currentQuizIndex].意味;
      setIsSelected(!isSelected);
      setIsCorrect(isCorrectAnswer);
      if (!isCorrectAnswer) {
        newMistakes.push({
          currentQuizIndex,
          correctAnswer: quizArray[currentQuizIndex],
          fakeAnswer: fakeArray.slice(0, 4),
          yourAnser: meaning,
        });
        setMistakes(newMistakes);
        console.log("ミステーク", newMistakes);
      }
    }
  };

  return (
    <div className="quiz-page">
      <div className="slide-bar"></div>
      <h2>クイズページ</h2>
      <div className="quiz-wrap">
        {showContent ? (
          isSelected ? (
            <div className="quiz-content">
              <p>
                第{currentQuizIndex + 1}問！{quizArray[currentQuizIndex].単語}
              </p>
              <div>
                {fakeArray.slice(0, 4).map((fakeItem, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendAnswer(fakeItem, index)}
                  >
                    {fakeItem.意味}
                  </button>
                ))}
              </div>
              <Link to="/quizSetting">
                <button>Back</button>
              </Link>
            </div>
          ) : (
            <div className="quiz-answer">
              {isCorrect === true && (
                <div>
                  <p>正解！</p>
                  <button onClick={() => handleSendAnswer("next")}>次へ</button>
                </div>
              )}
              {isCorrect === false && (
                <div>
                  <p>残念。正解は{quizArray[currentQuizIndex].意味}でした。</p>
                  <button onClick={() => handleSendAnswer("next")}>次へ</button>
                </div>
              )}
            </div>
          )
        ) : (
          <div className="quiz-result-wrap">
            <div className="quiz-result">
              <p>お疲れ様でした</p>
              <p>間違えた問題数は{mistakes.length}問です</p>
              <Link to="/">
                <button>終了</button>
              </Link>
              <sapn>
                <button>間違えた問題を見る</button>
              </sapn>
              <Link to="/">
                <button>Back</button>
              </Link>
            </div>
            <div className="quiz-result-ansewer"></div>
          </div>
        )}
      </div>

      <>
        <p>問題数: {quantity}</p>
        {quizArray.map((quiz, index) => (
          <div key={index}>
            <p>
              第{index + 1}問：{quiz.単語}、{quiz.拼音}、{quiz.品詞}、
              {quiz.意味}
            </p>
          </div>
        ))}
      </>
    </div>
  );
};

export default QuizPage;
