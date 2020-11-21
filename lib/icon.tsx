import React from 'react';
require('../assets/iconfont/iconfont.js')

interface IconProps {
    name:String
}

const Icon:React.FunctionComponent<IconProps>  = (props)=> {
    return (
        <div>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#icon-${props.name}`} />
            </svg>
        </div>
    )

}
export default Icon