import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

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

    render() {
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
              Products:{this.state.productCount}
                <h1>All Products</h1>
                <div className="sidenav">
                    <div><Link to="/products" onClick={()=>filterProduct('All')}>All Product</Link></div>
                    <div><Link to="/products" onClick={()=>filterProduct('fruits')} >Fruits</Link></div>
                    <div><Link to="/products" onClick={()=>filterProduct('vegetables')}>Vegitables</Link></div>
                    
                </div>
                {
                    this.state.prod.length > 0 ? 
                        this.state.prod.map(post => <Product key="post.index" post = {post} clicked={()=>this.props.addProductToCart(post.id)}/>) :
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