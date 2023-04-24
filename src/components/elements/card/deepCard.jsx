import {useParams} from "react-router-dom"
import {useSelector} from 'react-redux';
import Card from "./index";
import { Link } from "react-router-dom";
import LogOut from "../../ui/logout";
import { useNavigate } from "react-router-dom";


function DeepCard() {
    const {id} = useParams();
   
    const products = useSelector(state => state.products.products)
    let renderCart = products.find(p => p.id == id)
    const basketProducts = useSelector(state => state.products.basketProducts)
    const totalPrice = basketProducts.reduce((acc, item) => acc += item.price , 0)
    const totalCount = basketProducts.reduce((acc, item) => acc += item.count , 0)
    const navigate = useNavigate()
    
    const back = () => {
            navigate(-1)
            }
            
    return (
        <main className='openCard'>

          <div className="openCard-wrap">
            <header className="openCard-head">
                      <Link onClick={back} className='openCart__btn'></Link>
                      <div className="openCard-head_rblock">
                      <p>{totalCount} товаров на сумму {totalPrice}р</p>
                        <Link to="/cart"className='cart'></Link>
                        <LogOut/>
                      </div>
            </header>
              
  
              <Card
                          style={'deepCard'}
                          id={renderCart.id}
                          key={renderCart.id}
                          url={renderCart.url}
                          title={renderCart.title}
                          fulldesc={renderCart.fulldesc}
                          price={renderCart.price}
                          weight={renderCart.weight}
                          />
              </div>
            </main>
            )}

export default DeepCard