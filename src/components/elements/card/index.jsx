import React from 'react';
import {addProductsBasket} from '../../../store/reducers/products';
import {delProductsBasket} from '../../../store/reducers/products';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Card({
    url,
    title,
    description,
    fulldesc,
    price,
    weight,
    style,
    id,
    count,
    
}) {

    const navigation = useNavigate()
    const dispatch = useDispatch()

   

    const addProduct = (e) => {
        e.stopPropagation()
        const item = {
            id: id,
            title: title,
            url: url,
            price: price
        }

        dispatch(addProductsBasket(item))
    }
    const delProduct = (e) => {
        e.stopPropagation()
        console.log('click')
        const item = {
            id: id,
            title: title,
            url: url,
            price: price
        }

        dispatch(delProductsBasket(item))
    }

    const linkProduct = () => {
        console.log('open card')
        navigation(`/products/${id}`)
    }


    return (
        <div className={style} onClick={linkProduct}>
            <div>
                <img className='pic' src={url} alt='pic'/>
                <div className='card__count'>шт: {count}
                </div>
            </div>
            <h3 className='card__title'>{title}</h3>
            <p className='card__desc'>{description}</p>
            <p className='fulldesc'>{fulldesc}</p>
            <div className='card__footer'>
                <p>{price}
                    ₽<span>{weight}
                        г.</span>
                </p>
                <div className='add' onClick={addProduct}></div>
                <div className='del' onClick={delProduct}></div>
            </div>
            <div className='deepCard-rblock'>
                <h3 className='deepCard-rblock__title'>{title}</h3>
                <p className='deepCard-rblock__fulldesc'>{fulldesc}</p>
                <div className='deepCard-rblock__footer'>
                    <p>{price}
                        ₽<span>{weight}
                            г.</span>
                    </p>
                    <button className='add' onClick={addProduct}>В корзину</button>
                    {/* {oneAdd
                            ? <button className='add' onClick={addProduct}>В корзину</button> 
                            : <button className='added' onClick={delProduct} >Удалить из корзины</button>
                } */}
                </div>
            </div>

        </div>
    )
}

export default Card;
