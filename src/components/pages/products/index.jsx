import {Link} from 'react-router-dom';
import Card from '../../elements/card'
import { useSelector } from 'react-redux';
import DeepCard from '../../elements/card/deepCard';
import LogOut from '../../ui/logout';

function Products({
price,
// count,
addItemToCart,

}) {


const products = useSelector(state => state.products.products)
console.log(products)
const count = useSelector(state => state.count)
const basketProducts = useSelector(state => state.products.basketProducts)
const totalPrice = basketProducts.reduce((acc, item) => acc += item.price , 0)
const totalCount = basketProducts.reduce((acc, item) => acc += item.count , 0)

//------------------------------------------------------------------
// const countProduct = useSelector(state => state.products.countProduct)
// const totalPriceInBasket = useSelector(state => state.products.totalPriceInBasket)
//------------------------------------------------------------------



    return (
        <main>
            <div className='container'>
                <header className='header'>
                    <h1 className='header__title'>Наша продукция</h1>
                        
                    <div className="box">
                        <p>
                            
                        {/* {countProduct}//{totalPriceInBasket} */}
                    {totalCount === 1 &&
                        `${totalCount} товар на сумму ${totalPrice}р`
                        }
                        {totalCount === 0 &&
                        `${totalCount} товара на сумму ${totalPrice}р`
                        }
                        {totalCount > 1 &&
                        `${totalCount} товаров на сумму ${totalPrice}р`
                        }
                        </p>
                        
                        <Link to="/cart"className='cart' totalPrice={totalPrice}></Link>
                        <LogOut/>
                    </div>
                </header>
                <div className='product-list'>
                    {products.map(item => {

                        return (<Card
                            style={'card'}
                            id={item.id}
                            key={item.id}
                            url={item.url}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            weight={item.weight}
                            addItemToCart={addItemToCart}
                            />)

                    })}
                </div>
            </div>
        </main>
    )
}

export default Products;