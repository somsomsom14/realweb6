import React from 'react';
import { useState, useRef } from 'react';

export default function AppHookB07() {
  const [count, setCount] = useState(0);
  const ref = useRef(10);

  console.log('render count ' + count);
  console.log('render count ' + ref.current);
  return (
    <div>
      <div>count : {count}</div>
      <div>ref : {ref.current}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => (ref.current += 1)}>증가(ref)</button>
    </div>
  );
}
