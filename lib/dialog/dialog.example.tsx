import Dialog, {message, confirm, model} from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openModel = () => {
    const close = model(<h1>你好 <button onClick={() => close()}>close</button> </h1>);

  };
  return (
    <div>
      <div>
        <h1>example 1: Dialog</h1>
        <button onClick={() => setIsVisible(!isVisible)}>显示</button>
        <Dialog visible={isVisible}
                buttons={
                  [
                    <button onClick={() => setIsVisible(false)}>确认</button>,
                    <button onClick={() => setIsVisible(false)}>取消</button>
                  ]
                }
                onClose={() => setIsVisible(false)}
                closeOnBody={false}
        >
          <strong>hello world</strong>
        </Dialog>
      </div>
      <div>
        <h1>example 2: Message Confirm</h1>
        <button onClick={() => message('hello world')}>message</button>
        <button onClick={() => confirm('hello world', () => {console.log(1);}, () => {console.log(2);})}>Confirm
        </button>
      </div>
      <div>
        <h1>example 3: Model</h1>
        <button onClick={openModel}>Model</button>
      </div>
    </div>
  );
};

export default DialogExample;