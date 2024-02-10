import React from 'react'

const ListCard = ({listData}) => {
    
    return (
        <>
         <div className="card-container">
            {listData.map((curElem) => {

                 return ( 
                    <>
                       
                            <div className="card-list">
                                <div className="front">
                                    <h2>{curElem.title}</h2>
                                    <p>{curElem.para}</p>
                                </div>

                                <div className="back">
                                    <h2>{curElem.title}</h2>
                                    <p>{curElem.para}</p>
                                    <input type='button' value='Read More' /></div>
                            </div>

                        
                    </>

                 ) 

           })}
           </div>

        </>
    )
}

export default ListCard