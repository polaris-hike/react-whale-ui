import React from 'react';
import './importAll.js'

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