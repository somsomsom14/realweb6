import React from 'react';
import { useState, useEffect } from 'react';

export default function AppHookB04() {
  console.log('1111^^^');
  useEffect(() => {
    console.log('렌더링^^^');
  });

  useEffect(() => {
    console.log('초기 렌더링^^^');
  }, []);

  const [count, setCount] = useState(0);

  console.log('2222^^^');
  return (
    <div>
      <div>현재값 : {count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
