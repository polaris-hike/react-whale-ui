import Dialog from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () =>{
const [isVisible, setIsVisible] = useState(false);
return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>显示</button>
        <Dialog visible={isVisible}/>
    </div>
);
}

export default DialogExample;