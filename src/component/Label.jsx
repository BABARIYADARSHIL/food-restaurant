import React from 'react'

const Label = (props) => {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
    </div>
  )
}

export default Label
