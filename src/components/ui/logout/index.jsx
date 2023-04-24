import './logout.css'
import {logOut} from '../../../store/reducers/login'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';

function LogOut() {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    
    const Exit = () => {
        dispatch(logOut())
        navigation('/auth')
    }

    return (

        <button className="logout" onClick={Exit}>Выйти</button>

    )

}

export default LogOut