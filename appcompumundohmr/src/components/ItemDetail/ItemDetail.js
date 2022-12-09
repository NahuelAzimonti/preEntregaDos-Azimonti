import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name, description, img, stock, price}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-2">
            <img className="imageDetail"src={img}/>
            </div>
            <div className="col-md-4">
            <h1 className="titleDetail text-light">{name}</h1>
            <p className="pDetail text-light">{description}</p>
            <p className="text-light">${price}</p>
            <ItemCount stock={stock} />
            </div>
        </div>
    )
}


export default ItemDetail 