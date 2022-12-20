import React, { useEffect, useState } from 'react'

export interface CounterProps {
  otherCount: number;
}

export const Counter: React.FC<CounterProps> = ({otherCount}) => {
  const [count, setCount] = useState(0);

  const echo = () => console.log('other', otherCount);

  useEffect(() => {
    echo();
  }, []);

  return (
    <>
      <p>Count 1: {count}</p>
      <button onClick={() => setCount((cnt) => cnt + 1)}>Count 2</button>
    </>
  )
}