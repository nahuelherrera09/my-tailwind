import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CartContext from "./CartContext"

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div>
            
            <h1>YOUR CART</h1>
                 <div>
                    <Link to="/"> <button>CONTINUE SHOPPING</button> </Link>
                    {
                      (test.cartList.length > 0)
                      ? <button type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                      : <p>YOUR CART IS EMPTY</p>
                    }
                 </div>

            <div>
                    {
                      test.cartList.length > 0 ?
                      test.cartList.map(item =>
                        <div key={item.idItem}>
                         
                          <img src={item.imgItem}/>
                          <span>
                              <b>Product:</b>{item.nameItem}
                          </span>
                          <button type="filled" onClick={() => test.deleteItem (item.idItem)}>DELETE</button>

                        <p>{item.qtyItem} item(s)</p>
                        <p>${item.costItem} each </p>
                        </div> 
                      )
                      

                      : <p>Tittle</p>
                    }
            </div>     
            









        </div>
    )
}

export default Cart;