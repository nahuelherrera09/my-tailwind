import React from 'react'

const ItemDetail = ( {item} ) => {
 
 
    return (
    <>
        {
            item && item.image
            ?
            <div>
                <img src={item.image} alt="" />

                <div>
                    {item.name}
                    
                    {item.price}
                    {item.stock}
                </div>
            </div>
            : <p>Cargando...</p>
        }
    </>
  )
}

export default ItemDetail