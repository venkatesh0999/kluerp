import React from 'react'
import Child2 from './Child2'

const child1 = () => {
  return (
    <div>
      <Child2 {...props}/>
    </div>
  )
}

export default child1
