import React from 'react'

//import PropTypes from 'prop-types'

export default function Draggable(props){
  
  const drag = (e) => {
    e.dataTransfer.setData('transfer', e.target.id)
  }

  const notAllowDrop = (e) => {
    e.stopPropagation()
  }

  return(
    <div
      id={props.id}  draggable={true} onDragStart={drag} onDragOver={notAllowDrop}  style={props.style}  >
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