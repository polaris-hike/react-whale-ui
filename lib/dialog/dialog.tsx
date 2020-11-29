import React from 'react';
import './dialog.scss';
import Icon from '../icon/icon';
import {scopedClassMaker} from '../classes';
import '../index.scss'
interface Props {
    visible: boolean;
}



const scopedClass = scopedClassMaker('whale-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const {visible} = props;
    return (
        visible ?
            <>
                <div className={scopedClass('mask')}>
                </div>
                <div className={scopedClass()}>
                    <div className={scopedClass('close')}><Icon name="close"/></div>
                    <header className={scopedClass('header')}>提示</header>
                    <main className={scopedClass('main')}>{props.children}</main>
                    <footer className={scopedClass('footer')}>
                        <button>确认</button>
                        <button>取消</button>
                    </footer>
                </div>
            </>
            : null
    );
};

export default Dialog;