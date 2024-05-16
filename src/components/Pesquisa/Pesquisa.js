import { useState } from 'react';
export default function Counter() {
const [count, setCount] =
useState(0);
function incrementCount() {
setCount(count + 1);
}
function decrementCount() {
setCount(count - 1);
}

return (
    <div>
    <button
    onClick={incrementCount}>
    + 1
    </button>
    <span>{count}</span>
    <button
    onClick={decrementCount}>
    - 1
    </button>
    </div>
    );
    }