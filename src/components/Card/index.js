import React from 'react'

//import List from '../List'

import { Container, Label } from './styles'

export default function Card(){
  return(
    <Container>
      <header>
        <Label color='#7159c1' />
      </header>
      <p>Fazer a migração completa de servidor</p>
      <img src="https://yt3.ggpht.com/a-/AOh14Ggoh16xoedGhKc_7xJZxsYPx2ccfvx6ZPKTeNR0=s88-c-k-c0xffffffff-no-rj-mo" alt="Lucas"/>
    </Container>
  )
}