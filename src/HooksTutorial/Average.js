import { useEffect, useState, useMemo, useCallback, useRef } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
<<<<<<< HEAD
  const [re, setRe] = useState(0);
=======
  const inputEl = useRef(null);
>>>>>>> 41c56c8012232020a24fa4dbd22abb05b574c466

  //컴포넌트가 처음 렌더링 될때만 실행
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
<<<<<<< HEAD
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
=======
  }, []);
  const onInsert = useCallback(
    (e) => {
      const nextLine = list.concat(parseInt(number));
      setList(nextLine);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );
>>>>>>> 41c56c8012232020a24fa4dbd22abb05b574c466

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
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
