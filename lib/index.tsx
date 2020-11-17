import React, {useRef, useState} from 'react';
import   ReactDOM from 'react-dom';
//import Button from "./Button";

function App(){
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




ReactDOM.render(<App />,document.getElementById('root'))
