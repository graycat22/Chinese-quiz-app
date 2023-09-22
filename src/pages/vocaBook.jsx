import { Link } from "react-router-dom";
import vocabulary from "../library/wordBank";

const VocaBook = () => {
  return (
    <>
      <Link to="/">
        <button>ホームへ戻る</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>インデックス番号</th>
            <th>単語</th>
            <th>拼音</th>
            <th>意味</th>
            <th>品詞</th>
          </tr>
        </thead>
        <tbody>
          {vocabulary.map((value, index) => (
            <tr key={index}>
              <td>{value.idx}</td>
              <td>{value.単語}</td>
              <td>{value.拼音}</td>
              <td>{value.意味}</td>
              <td>{value.品詞}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default VocaBook;
