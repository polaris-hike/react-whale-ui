import Dialog,{message} from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () =>{
const [isVisible, setIsVisible] = useState(false);
return (
    <div>
        <div>
            <h1>example 1</h1>
            <button onClick={() => setIsVisible(!isVisible)}>显示</button>
            <Dialog visible={isVisible}
                    buttons={
                        [
                            <button onClick={()=>setIsVisible(false)}>确认</button>,
                            <button onClick={()=>setIsVisible(false)}>取消</button>
                        ]
                    }
                    onClose={()=>setIsVisible(false)}
                    closeOnBody={false}
            >
                <strong>hello world</strong>
            </Dialog>
        </div>
        <div>
            <h1>example 2</h1>
            <button onClick={() => message('hello world')}>显示</button>
        </div>
    </div>
);
}

export default DialogExample;