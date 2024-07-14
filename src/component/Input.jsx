import React from 'react'

const Input = (props) => {
  return (
    <div>
      <input className={props.className} type={props.type} value={props.value} name={props.name} onChange={props.onChange} placeholder={props.placeholder}></input>
    </div>
  )
}

export default Input
