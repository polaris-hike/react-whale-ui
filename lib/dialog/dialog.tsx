import React, {ReactElement, ReactEventHandler} from 'react';
import ReactDOM from 'react-dom'
import './dialog.scss';
import Icon from '../icon/icon';
import {scopedClassMaker} from '../classes';
import '../index.scss'
interface Props {
    visible: boolean;
    buttons:ReactElement[];
    onClose:ReactEventHandler;
    closeOnBody?:boolean
}



const scopedClass = scopedClassMaker('whale-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const {visible,onClose,closeOnBody} = props;
    const onClickClose:React.ReactEventHandler = (e)=>{
        onClose(e)
    }
    const onClickMask:React.ReactEventHandler = (e)=>{
        if(closeOnBody){
            onClickClose(e)
        }
    }
    return (
        ReactDOM.createPortal(
            visible ?
                <>
                    <div className={scopedClass('mask')} onClick={onClickMask}>
                    </div>
                    <div className={scopedClass()}>
                        <div className={scopedClass('close')} onClick={onClickClose}><Icon name="close"/></div>
                        <header className={scopedClass('header')}>提示</header>
                        <main className={scopedClass('main')}>{props.children}</main>
                        <footer className={scopedClass('footer')}>
                            {
                                props.buttons.map(((button,index)=>
                                        React.cloneElement(button,{key:index})
                                ))
                            }
                            {/* <button>确认</button>
                        <button>取消</button>*/}
                        </footer>
                    </div>
                </>
                : null,document.body
        )

    );
};
Dialog.defaultProps = {
    closeOnBody:true
}

export default Dialog;