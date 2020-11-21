import React from 'react';
import './importAll.js';
import './icon.scss';
import classes from './helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string,
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,...restProps} = props; //restProps 为其余svg接受的参数

    return (
        <svg className={classes('whale-icon',className)}     aria-hidden="true" {...restProps} >
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );

};
export default Icon;