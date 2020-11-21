import React from 'react';
import './importAll.js';
import './icon.scss';

interface IconProps {
    name: String,
    onClick:(e:any)=>void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="whale-icon" aria-hidden="true" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );

};
export default Icon;