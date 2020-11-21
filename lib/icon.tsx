import React from 'react';

interface IconProps {
    name:String
}

const Icon:React.FunctionComponent<IconProps>  = (props)=> {
    return (
        <div>
            {props.name}
        </div>
    )

}
export default Icon