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


function App1(){
    // useState 接受函数
    const [user,setUser] = useState(()=>({name:'wuxuwei',age:18}))
    const [n,setN] = useState(0)
    const change = ()=>{
        // 不会局部更新
        /*setUser({  // 这样子的话 age 会消失
            name:'hjj',
        })*/
        // 如果要更新要求对象地址要变
        /*user.name= 'hjj' // 这样子的话不会改变，对象要求地址改变才会触发render
        setUser(user)*/
        setUser({
            name:'hjj',
            age:19
        })
    }
    const changeN = ()=>{
        /*setN(n+1) // 这样子n只会+1
        setN(n+1)*/

        // setState 接受函数
        setN(n=>n+1)
        setN(n=>n+1)
    }
    return (
        <div>
            <p>name:{user.name}</p>
            <p>age:{user.age}</p>
            <button onClick={change}>set</button>
            -----------------------------------------
            <p>n{n}</p>
            <button onClick={changeN}>n+1</button>
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
