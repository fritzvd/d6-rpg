import React from 'react'
import formFieldFactory from './formFieldFactory'

export default function Select (props) {
  return formFieldFactory(props, <div className="select">
    <select className="select" default={props.default} onChange={(e) => props.onChange(e)}>
      {props.options.map(o =><option key={o}>{o}</option>)}
    </select>
  </div>)
    
}