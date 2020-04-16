import React from 'react'

//import PropTypes from 'prop-types'

export default function Droppable(props){
  
  const drop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('transfer')
    e.target.appendChild(document.getElementById(data))
  }

  const allowDrop = (e) => {
    e.preventDefault()
  }

  return(
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={allowDrop}
      style={props.style}
      >
      {props.children}
    </div>
  )

}
/*
Draggable.PropTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

/** */