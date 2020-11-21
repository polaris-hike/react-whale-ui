import React from 'react';
import './importAll.js'
import './icon.scss'

interface IconProps {
    name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <div>
            {<svg className="icon" aria-hidden="true">
                <use xlinkHref={`#${props.name}`}/>
            </svg>}
        </div>
    );

};
export default Icon;