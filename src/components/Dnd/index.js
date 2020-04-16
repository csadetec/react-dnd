import React from 'react'
import styled from 'styled-components'
import Draggable from '../Draggable'
import Droppable from '../Droppable'

const Wrapper = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
`

const Item = styled.div`
  padding: 8px;
  color: #555;
  background-color: white;
  border-radius: 3px;
`

const droppableStyle = {
  backgroundColor: '#555',
  width: 250,
  height: 400,
  margin: 32
}

export default function Dnd() {
  return(
   <Wrapper>
    <Droppable id='dr1' style={droppableStyle}>
      <Draggable id='item1' style={{margin: '8px'}}><Item> Item 1</Item></Draggable>
      <Draggable id='item2' style={{margin: '8px'}}><Item>Item 2</Item> </Draggable>
      
    </Droppable>
    <Droppable id='dr2' style={droppableStyle}>
      
    </Droppable>
   </Wrapper> 
  )
}
