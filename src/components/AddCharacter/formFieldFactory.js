import React from 'react'

export default function formFieldFactory(props, Wrapped) {
  return <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      {Wrapped}
    </div>
  </div>
}