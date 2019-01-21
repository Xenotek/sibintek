import React from 'react'

const ItemsList = (props) => {
    return (
        <ul>
            {
                props.items.map(function (item) {
                    return <li key={item.id} >{item.title} ({item.date})</li>
                })
            }
        </ul>
    )
}

export default ItemsList