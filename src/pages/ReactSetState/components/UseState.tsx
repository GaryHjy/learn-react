import { useEffect, useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const addCount = () => {
    console.log('before', count);
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount((count) => {
      console.log('set callback', count);
      return count + 1;
    });
    console.log('after', count);
  };

  return (
    <div>
      UseState
      {count}
      <button onClick={addCount}>点击</button>
    </div>
  );
}

export default UseState;
