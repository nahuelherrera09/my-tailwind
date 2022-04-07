import React from 'react'
import Item from './Item'

const ItemList = ( {items} ) => {
  return (
    <>
    <div>
        <div className=''>

            <div className=' grid grid-cols-3 gap-2 mx-4 mt-8 place-items-center'>
            {
                items.length > 0
                ? items.map (item => <Item key={item.id} title={item.name} price={item.price} image={item.image} stock={item.stock}/> )
                : <p>Cargando...</p>
            }
        </div>
    </div>
    </div>
    </>

    )
}

export default ItemList