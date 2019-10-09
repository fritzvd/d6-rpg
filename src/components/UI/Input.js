import React from 'react'
import formFieldFactory from './formFieldFactory'

export default function Input (props) {
  let icon = ''
  if (props.icon) {
    icon = <span className={`icon is-small is-${props.icon.location}`}>
      <i className={`fas fa-${props.icon.name}`} onClick={() => props.icon.action()}></i>
    </span>
  }

  return formFieldFactory(props, <>
    <input
      className={`input ${props.className}`}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
    {icon}
    {(props.help) ? <p className="help">{props.help}</p> : ''}
  </>)
}