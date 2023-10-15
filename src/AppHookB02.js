import React from 'react';
import { useState, useRef } from 'react';

export default function AppHookB02() {
  const [data, setData] = useState('before');

  function handleChange() {
    setData('after');
    alert('data : ' + data);
  }

  function handleGet() {
    alert('data : ' + data);
  }

  return (
    <div>
      <div>데이터 : {data}</div>
      <button onClick={handleChange}>change</button>
      <button onClick={handleGet}>get</button>
    </div>
  );
}
