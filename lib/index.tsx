import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e);
    console.log(111);
};

function App() {

    return (
        <div>
            <Icon name="wechat" className='qqq' onClick={fn}/>
            <Icon name="alipay" onClick={fn}/>
        </div>
    ) ;
}

ReactDOM.render(<App/>, document.getElementById('root'));
