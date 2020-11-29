import React from 'react';

interface Props {
    visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    console.log(props);
    const {visible} = props;
    return (
        visible ? <div>dialog</div> : null
    );
};

export default Dialog;