import React,{useState} from 'react';
import   ReactDOM from 'react-dom';
//import Button from "./Button";
const _state:any = [];
let index = 0;
const myUseState = (initValue:any)=>{
    const currentIndex = index;
    _state[currentIndex] = _state[currentIndex] === undefined ? initValue : _state[currentIndex];

    const setState = (newValue:any)=>{
        _state[currentIndex] = newValue;
        render()
    }
        index += 1
    return [_state[currentIndex],setState]
}
const render =()=>{
    index = 0;
    ReactDOM.render(<App />,document.getElementById('root'))
}

const App = ()=>{
    const [n,setN] = myUseState(0)
    const [m,setM] = myUseState(0)
    return (
        <div>
            n:{n}
            m:{m}
            <button onClick={()=>setN(n+1)}>n+1</button>
            <button onClick={()=>setM(m+1)}>m+1</button>
        </div>
    )
}



ReactDOM.render(<App />,document.getElementById('root'))
