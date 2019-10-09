import React from 'react'

export default function Icon (props) {
  return <span className="icon">
    <i className={`fas fa-${props.iconName}`} />
  </span>
}