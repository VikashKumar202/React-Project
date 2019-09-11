import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css';
import imageLogo from '../../assets/logo.png'


class Navigation extends Component
{
    render(){
        return(
            <nav>
                <ul className="nav-link">
                <Link to="/" >
                        <li>Home</li>
                    </Link>
                    <Link  to="/Products">
                        <li>Product</li>
                    </Link>
                    <Link  to="/AddProducts">
                        <li>Add Product</li>
                    </Link>
                    <Link  to="/EditProducts">
                        <li>Edit Product</li>
                    </Link>
                    <Link  to="/productcart">
                        <li>Product Cart</li>
                    </Link>
                    
                    
                </ul>
            </nav>  
        )
    }
}

export default Navigation;