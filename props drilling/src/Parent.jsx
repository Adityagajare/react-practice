import React from 'react'
import Child from './Child';

const Parent = (props) => {
  return (
    <div>
        <Child data={props.data}/>
    </div>
  )
}

export default Parent;