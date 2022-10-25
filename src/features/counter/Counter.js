import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset, addByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setincrementAmount] = useState(0);

  const resetAll = () => {
    setincrementAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment(count))}>+</button>
        <button onClick={() => dispatch(decrement(count))}>-</button>
        <div>
          <input
            type="number"
            value={incrementAmount}
            onChange={(event) => setincrementAmount(event.target.value)}
          />
          <button
            onClick={() => dispatch(addByAmount(Number(incrementAmount)))}
          >
            Add
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
