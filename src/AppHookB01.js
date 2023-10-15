import React from 'react';

export default function AppHookB01() {
  let data = 'before';

  function handleChange() {
    data = 'after';
    alert('data : ' + data);
  }

  return (
    <div>
      <div>데이터 : {data}</div>
      <button onClick={handleChange}>change</button>
    </div>
  );
}
