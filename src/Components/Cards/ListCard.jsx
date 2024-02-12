import React from 'react'

const ListCard = ({ listData }) => {

    return (
        <>
            <div className="card-container ">
                {listData.map(({ color, title }) => {
                    return (
                        <>
                            <div className="card-list shadow" style={{ backgroundColor: `${color}` }}>
                                <h2>{title}</h2>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListCard