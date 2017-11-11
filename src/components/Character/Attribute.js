import React from 'react'

const Attribute = ({dispatch, attribute}) => {
  return (
    <div>
      {attribute.name} - {attribute.dice}
    </div>
  )
}

export default Attribute