import React, { Component } from 'react';
import axios from 'axios';
//import Product from './products.css';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
//import {getAllProduct} from '../../store/actions';
import flower from '../../../src/flower.jpg';



class products extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            prod: [],
            productCount:0
        }
    }


    componentDidMount() {
        this.props.getAllProduct();
    }

    /* addCartToProductHandler = (event) => {
        const productCount = this.state.productCount;
        console.log('ProductCount=' + productCount)
        const counter = productCount + 1;
        this.setState({ productCount: counter })
        console.log("Added" + counter);
        console.log(this.state.productCount)

        let id = event.target.value;
        console.log('Product Id:' + id);
       
        
    } */

    
    render() {
        //const arrProducts = this.state
       
        let products=this.props.products;
        
        
        //let categories=['All','vegetables','fruits'];
            const filterProduct=(category)=>{
                
            products=products.filter((Product)=>Product.category===category)
            this.setState({
                prod:[...products]
            });
           
            if(category==='All')
            {
               this.setState({
                   prod:[...this.props.products]
               })
            }
        }

        return (
          
            <div>
                <img src={flower} />
              Products:{this.state.productCount}
                <h1>All Products</h1>
                <div className="sidenav">
                    <div><Link to="/products" onClick={()=>filterProduct('All')}>All Product</Link></div>
                    <div><Link to="/products" onClick={()=>filterProduct('fruits')} >Fruits</Link></div>
                    <div><Link to="/products" onClick={()=>filterProduct('vegetables')}>Vegitables</Link></div>
                    
                </div>
                {
                    this.state.prod.length > 0 ? 
                        this.state.prod.map(post => <Product post = {post} clicked={()=>this.props.addProductToCart(post.id)}/>) :
                        this.props.products.map(post => <Product post = {post} clicked={() => this.props.addProductToCart(post.id)} /> )
                }
               
            </div>
        )
    }
}


const mapStateToProps = state => {
    return{
        products:state.arrProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProduct: () => dispatch(actionType.getAllProduct()),
       // getSpecificFruitsProduct:()=>dispatch({type:actionType.GETSPECIFICFRUITSPRODUCT,value:'fruits'})
       addProductToCart:(id)=>dispatch(actionType.addProductToCart(id))
     
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(products);