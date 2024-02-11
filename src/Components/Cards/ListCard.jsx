import React from 'react'

const ListCard = ({listData}) => {
    
    return (
        <>
         <div className="card-container">
            {listData.map((curElem) => {

                 return ( 
                    <>
                       
                            <div className="card-list" style={{backgroundColor: `${curElem.color}`}}>
                               
                                    <h2>{curElem.title}</h2>
                                  
                            </div>

                        
                    </>

                 ) 

           })}
           </div>

        </>
    )
}

export default ListCard