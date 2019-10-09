import React from 'react'

export default function formFieldFactory(props, Wrapped) {
  const icon = (props.icon) ? 'has-icons-' + props.icon.location : ''
  return <div className="field">
    <label className="label">{props.label}</label>
    <div className={`control ${icon}`}>
      {Wrapped}
    </div>
  </div>
}