import React, {useReducer, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
//import Button from "./Button";

const initial = {
    name:'',
    age:18,
    nation:'汉族'
}
const reducer = (state:any, action:any) => {
    if (action.type === 'change') {
        return {...initial,...action.formData}
    } else if (action.type === 'reset') {
        return initial
    }
}

/*function App() {
    const [state, dispatch] = useReducer(reducer, initial)
    const {n} = state
    const onClick = ()=>{
        dispatch({type:'add'})
    }
    const onClick1 = ()=>{
        dispatch({type:'mult'})
    }
    const onClick2 = ()=>{
        dispatch({type:'dele'})
    }
    return (
        <div>
            <h1>n:{n}</h1>
            <button onClick={onClick}>+1</button>
            <button onClick={onClick1}>*2</button>
            <button onClick={onClick2}>-1</button>
        </div>
    )
}*/

function App() {
    const [state, dispatch] = useReducer(reducer, initial);
    const onReset = ()=>{
        dispatch({type:'reset'})
    }
    return (
        <div>
            <form onReset={onReset}>
                <div>
                    <label >
                        姓名
                        <input type="text"
                            value={state.name}
                            onChange={e=>dispatch({type:'change',formData:{name:e.target.value}})}
                        />
                    </label>
                </div>
                <div>
                    <label >
                        年龄
                        <input type="text"
                            value={state.age}
                            onChange={e=>dispatch({type:'change',formData:{age:e.target.value}})}
                        />
                    </label>
                </div>
               <div>
                   <label >
                       民族
                       <input type="text"
                           value={state.nation}
                           onChange={e=>dispatch({type:'change',formData:{nation:e.target.value}})}
                       />
                   </label>
               </div>
                <button type="reset">重置</button>
                <hr/>
                {JSON.stringify(state)}
            </form>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
