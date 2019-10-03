import React from 'react'
import formFieldFactory from './formFieldFactory'

export default function Input (props) {
  return formFieldFactory(props, <input
    className="input"
    type={props.type}
    onChange={(e) => props.onChange(e)}
    placeholder={props.placeholder}
  />)
}