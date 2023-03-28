// 1. fonction based component

// import React from 'react'

// const Hoc = (WrappedComponent) => {
//   return ()=>{
//     return <WrappedComponent data="Hello" />
//   }
// }

// export default Hoc


// 2. class based component

import React, { Component } from 'react'

const Hoc=(WrappedComponent)=>{
    return class Hoc extends Component {
        render() {
          return (
            <WrappedComponent data="hello world" />
          )
        }
      }
}
export default Hoc
