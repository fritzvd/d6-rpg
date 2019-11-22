import React from 'react'
import formFieldFactory from './formFieldFactory'

export default function Select (props) {
  return formFieldFactory(props, <div className="select">
    <select className="select" defaultValue={(props.defualt) ? props.default: ''} onChange={(e) => props.onChange(e)}>
      {(props.blankDefault) ? <option key="blank-default">--</option> : ''}
      {props.options.map(o =><option key={o.name} disabled={o.disabled}>{o.name}</option>)}
    </select>
  </div>)
    
}