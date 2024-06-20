import React, {useState} from "react" //useState is default function of react
// useState is named import
/* 
    function useState(initialValue) {
    codes ...

    return [ initialValue, mutatorFunction ]
    }
 */
function Counter() {

    let countValue = 100

    // Any value you pass in setState will be passed to state
    const [state, setState] = useState(100);//array destructuring

    function increment() {
        console.log("increment");
        countValue++;
        console.log({countValue});

        setState(state + 1)
    }

    function decrement() {
        setState(state - 1)
    }

    //The code below doesn't work with normal variable. To rerender it we need to use special variable useState
    console.log("rendering");

    return <div>
        <h1>Count: {countValue}</h1>
        <h1>State: {state}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
}
//Click event or Evenet listener
export default Counter;