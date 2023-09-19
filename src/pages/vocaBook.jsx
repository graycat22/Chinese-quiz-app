import vocabulary from "../library/wordBank";

const VocaBook = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>単語</th>
          <th>拼音</th>
          <th>意味</th>
          <th>品詞</th>
        </tr>
      </thead>
      <tbody>
        {vocabulary.map((value, index) => (
          <tr key={index}>
            <td>{ value.単語 }</td>
            <td>{ value.拼音 }</td>
            <td>{ value.意味 }</td>
            <td>{ value.品詞 }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VocaBook;
