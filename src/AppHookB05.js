import React from 'react';
import { useState, useEffect } from 'react';

export default function AppHookB05() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('초기 렌더링^^^');
  }, []);

  useEffect(() => {
    console.log('name 변수 렌더링^^^');
  }, [name]);

  console.log('렌더링');

  return (
    <div>
      <div>
        현재값 : {count} / {name}
      </div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setName('change')}>변경</button>
    </div>
  );
}
