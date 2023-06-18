import { NavLink } from 'react-router-dom'
import './mainheader.css'
import cartImage from '../../pics/trolley.png'
import deleteImage from '../../pics/delete.png'
import { useDispatch,useSelector } from 'react-redux'
import {itemRemover} from '../../redux/slices/cartslice'
import {searchOutItems,clearSearch} from '../../redux/slices/filterslice'

export default function MainHeader(props){
    const dispatch = useDispatch()
    const cartInfo = useSelector(state => state.cartInfo)
    const filterInfo = useSelector(state => state.filterInfo)
    return(
        <div className="mainHeader">
            <div className="headerParts headingLogo"><h2>Shopping Cart by Nitesh</h2></div>

            {!props.onCartPage && <div className="headerParts inputDiv"><input autoFocus type="text" placeholder="Search desired product here.." value={filterInfo.searchQuery} onChange={(e)=>dispatch(searchOutItems(String(e.target.value)))}></input></div>}

            {
            !props.onCartPage?
            <div className="headerParts parent">
                <NavLink to='/cart'><img style={{width:'3rem'}} src={cartImage}></img></NavLink>
                {cartInfo.items.length>0 && <div class="dropdown">
                    <ul>
                        {cartInfo.items.map(item => <li style={{color:'black'}}>{item.title}<img style={{width:'1.5rem',marginLeft:'1rem'}} src={deleteImage} onClick={
                            ()=>{
                                dispatch(itemRemover(item.id))
                            }
                        }></img></li>)}
                    </ul>
                </div>}
            </div>
                :
            <div>
                <NavLink to='/'>Go to Home Page</NavLink>
            </div>
            }
        </div>
    )

}