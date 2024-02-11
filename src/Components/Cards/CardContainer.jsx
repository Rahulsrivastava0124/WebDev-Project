import React from 'react'
import '../../CSS/Hero/Card.css'
import {ListItem} from '../listApi.js'
import ListCard from './ListCard.jsx'

const CardContainer = () => {
  return (
    <>
      <ListCard listData={ListItem} />
    </>
  )
}

export default CardContainer