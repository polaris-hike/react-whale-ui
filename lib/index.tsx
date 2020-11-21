import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';


function App(){
    return (
        <div>
            App
            <Icon name="wechat"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
