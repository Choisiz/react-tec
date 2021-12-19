import { useEffect, useState, useMemo } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const [re, setRe] = useState(0);

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextLine = list.concat(parseInt(number));
    setRe(0);
    setList(nextLine);
    setNumber("");
    getAverage(list);
  };
  const getAverage = (numbers) => {
    console.log("계산중");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    const result = sum / numbers.length;
    setRe(result);
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b>
        {parseInt(re)}
      </div>
    </div>
  );
};

export default Average;
