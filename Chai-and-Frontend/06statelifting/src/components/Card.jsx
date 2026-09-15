import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=> props.setName(e.target.value) } placeholder='enter details' />

      <p>name state variable ki value:{props.title} : {props.name} </p>
    </div>
  )
}

export default Card
