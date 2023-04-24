import React from 'react';
import {Link} from 'react-router-dom';
import {products} from "../products/products"
import {useSelector} from 'react-redux';
import Card from "../../elements/card"
import Button from '../../ui/button';
import LogOut from '../../ui/logout';
import { useNavigate } from 'react-router-dom';
const Basket = () => {

    const productsBasket = useSelector(state => state.products.basketProducts)
    const totalPrice = productsBasket.reduce((acc, item) => acc += item.price , 0)
 
    const navigate = useNavigate()
    const back = () => {
    navigate(-1)
    }


    return (
        <main className='openCart-wrap'>
            <div className='openCart'>
                <header>
                    <Link onClick={back} className='openCart__btn'></Link>
                    <h2 className='openCart__title'>Корзина с выбранными товарами</h2>
                    <LogOut/>
                </header>

                <div className='openCart__list-wrap containerCart'>
                    <ul className='openCart__list'>

                        {productsBasket.map(item => {

                            return (
                              <Card
                              style={'toCart'}
                              id={item.id}
                              key={item.id}
                              url={item.url}
                              count={item.count}
                              title={item.title}
                              price={item.price}
                              />
                              
                              )

                        })}
                    </ul>
                </div>
            </div>
            <div className='openCart__block'>

                <div className='openCart__push container'>
                    <div>Заказ на сумму: {totalPrice}₽</div>
                    <Button name='Оформить заказ'/>
                </div>
            </div>
        </main>
    )
};

export default Basket;