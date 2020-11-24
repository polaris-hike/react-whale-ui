import React,{useState} from 'react';

function Button() {
    const [n,setN] = useState(0)
    return (
        <button onClick={()=>setN(n+1)}>
            按钮{n}
        </button>
    )
}

export default Button
