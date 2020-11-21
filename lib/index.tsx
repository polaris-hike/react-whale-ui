import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn = (e:any)=>{
    console.log(e);
    console.log(111);
}
function App(){

    return (
        <div>
            <Icon name="wechat" onClick={fn}/>
            <Icon name="alipay"  onClick={fn}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
