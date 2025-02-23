import { useState } from 'react';

function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Counter Application</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px', fontSize: '16px', backgroundColor: 'green', color: 'white' }}>
        Increment
      </button>
      
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px', fontSize: '16px', backgroundColor: 'red', color: 'white' }}>
        Decrement
      </button>
      
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px', fontSize: '16px', backgroundColor: 'blue', color: 'white' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
