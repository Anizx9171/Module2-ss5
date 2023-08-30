import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const fibonacci = (n) => {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  console.time("Bắt đầu"); //Do thời gian bắt đầu
  const resule = useMemo(() => {
    return fibonacci(20);
  }, []);
  console.timeEnd("Kết thúc");
  return (
    <>
      <h4>Count: {count}</h4>
      <h4>fibonacci: {resule}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
