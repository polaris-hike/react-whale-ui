import ReactDOM from "react-dom";
import React, {useRef, useState} from "react";

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


// setN 才会render
/*const App1 = ()=>{
 const [n,setN] = useState(0);
 const log = ()=>{
     setTimeout(()=>{
         console.log('n:'+n)
     },1000)
 }
 return (
     <div>
         n:{n}
         <button onClick={()=>setN(n+1)}>+1</button>
         <button onClick={log}>log</button>
     </div>
 )
}*/

const App2 = ()=>{
    const nRef = useRef(0);
    const update = useState(0)[1]
    const log = ()=>{
        setTimeout(()=>{
            console.log('n:'+nRef.current)
        },1000)
    }
    return (
        <div>
            n:{nRef.current}
            { <button onClick={()=>{nRef.current+=1,update(nRef.current)} }>+1</button>}
            <button onClick={log}>log</button>
        </div>
    )
}

export default App2
