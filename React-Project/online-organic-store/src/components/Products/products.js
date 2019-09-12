import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';
import './products.css';


class products extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            prod: [],
          
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
              
                <h1>All Products</h1>
                <div className="sidenav">
                    <div><Link to="/products" onClick={()=>filterProduct('All')}>All Product</Link></div>
                    <div><Link to="/products" onClick={()=>filterProduct('fruits')} >Fruits</Link></div>
                    <div><Link to="/products" onClick={()=>filterProduct('vegetables')}>Vegetables</Link></div>  
                </div>
                
                       {
                           this.state.prod.length>0?
                                this.state.prod.map(product =>  
                                <div className="Product">
                                <div>Category:{product.category}</div>
                                <div>Name:{product.title}</div>
                                <div><img src={product.imageUrl} ></img></div>
                                <div>Price:{product.price}</div>
                                <div><button className="btn btn-primary" onClick={() => this.props.addProductToCart(product.id)}>Add to Cart</button> </div>
                                </div>  
                                ) : this.props.products.map(product =>  
                                <div className="Product">
                                <div>Category:{product.category}</div>
                                <div>Name:{product.title}</div>
                                <div><img src={product.imageUrl} ></img></div>
                                <div>Price:{product.price}</div>
                                <div><button className="btn btn-primary" onClick={() => this.props.addProductToCart(product.id)}>Add to Cart</button> </div>
                                  </div> 
                                  )
                        }
                                
                 </div>
    
                );
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