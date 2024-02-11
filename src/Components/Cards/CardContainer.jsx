import React, { useState } from 'react'
import '../../CSS/Hero/Card.css'
import ListItem from '../ListApi.js'
import ListCard from './ListCard.jsx'

const CardContainer = () => {

    const [listData,setListData] = useState(ListItem);
  
  return (
    <>
      <ListCard listData = {listData}/>
    </>
  )
}

export default CardContainer