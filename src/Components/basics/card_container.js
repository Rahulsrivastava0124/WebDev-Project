import React, { useState } from 'react'
import './style.css'
import ListItem from '../listApi.js'
import ListCard from './ListCard.js'

const CardContainer = () => {

    const [listData,setListData] = useState(ListItem);
  

  return (
    <>
      <ListCard listData = {listData}/>
    </>
  )
}

export default CardContainer