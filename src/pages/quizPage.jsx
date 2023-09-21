import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { shuffleArray } from "./quizSetting";

const QuizPage = () => {
  const { state } = useLocation();
  const {
    quantityValue,
    quizArray: initialQuizArray,
    randomArray: initialRandomArray,
  } = state;
  const quizArray = initialQuizArray;
  const [showContent, setShowContent] = useState(true);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(true);
  const [isCorrect, setIsCorrect] = useState(null);

  // randomArrayはSettingのquizArrayと同じ。つまりユーザが選んだ品詞の全単語が入ってる。
  const randomArray = initialRandomArray.filter(
    (item) => item.品詞 === quizArray[currentQuizIndex].品詞
  );
  //問題の品詞と同じ品詞の単語を抽出して配列化
  console.log("品詞", randomArray, initialRandomArray);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

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

  const handleAnswerQuiz = (array) => {
    handleSendAnswer(array);
  };

  const handleSendAnswer = (meaning) => {
    const isLastQuiz = currentQuizIndex === quantityValue - 1;

    if (meaning === "next") {
      isLastQuiz
        ? setShowContent(false)
        : setCurrentQuizIndex(currentQuizIndex + 1);
      setIsSelected(!isSelected);
      setIsCorrect(null);
    } else {
      const isCorrectAnswer = meaning === quizArray[currentQuizIndex].意味;
      setIsSelected(!isSelected);
      setIsCorrect(isCorrectAnswer);
    }
  };

  return (
    <div className="quiz-page">
      <div className="slide-bar"></div>
      <h2>クイズページ</h2>

      <>
        {showContent ? (
          isSelected ? (
            <div className="quiz-wrap">
              <div>
                <p>
                  第{currentQuizIndex + 1}問！{quizArray[currentQuizIndex].単語}
                </p>
                {fakeArray.slice(0, 4).map((fakeItem, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerQuiz(fakeItem.意味)}
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
          <div>
            <p>お疲れ様でした</p>
            <Link to="/">
              <button>終了</button>
            </Link>
            <Link to="/">
              <button>Back</button>
            </Link>
          </div>
        )}
      </>

      <>
        <p>問題数: {quantityValue}</p>
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
