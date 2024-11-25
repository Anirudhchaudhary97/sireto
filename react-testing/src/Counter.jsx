import React, { useState } from 'react'


const Counter=()=> {
  const [count, setCount] = useState(0)
  return (
    <div>
      <pre>
        Click count = <span>{count}</span>
      </pre>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}
export default Counter