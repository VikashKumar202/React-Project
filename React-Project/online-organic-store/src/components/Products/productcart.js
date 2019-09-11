import React ,{Component}from 'react';
import {connect} from 'react-redux'
import Axios from 'axios';
import * as actionType from '../../store/actions';

class productcart extends Component{

    constructor(props){
        super(props)

        this.state={
            tempArrProducts:[],
            productCount:1,
           totalPrice:0
        }
       
    }

    

    decreaseProductCount = (id,quantity) => {
        console.log('coming'+id,quantity);
        if(quantity==1){
            this.props.deleteProductCart(id)
            
        }
        else{
            this.props.decreaseProductCount(id)
        }
        
       /*  const productCount = this.state.productCount;
        console.log('ProductCount=' + productCount)
        const counter = productCount - 1;
        this.setState({ productCount: counter })
        console.log("Added" + counter);
        console.log(this.state.productCount)
 */
        /* let id = event.target.value;
        console.log('Product Id:' + id); */
       
        
    }


    render(){         

        const products=this.props.products;
        console.log(products)
        // this.setState({
        //     totalPrice:this.props.price*this.props.quantity
        // });
        
        let bill=0;

       // const {tempArrProducts,errormsg}=this.state
        return(
                products.length>0?
            <div>
                 
                <h1>Your Cart</h1>
                <table className="tableStyle">
                    <tbody><tr><th>Category</th><th>Name</th><th>Price</th><th>Quantity</th></tr>
                  {
                     
                    products.map(product =>{
                        bill= bill+product.price*product.quantity;
                        return (  
                    <tr key={product.id}>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.price*product.quantity}</td>
                        <td><button className="btn btn-primary"  onClick={()=>this.props.increseProductCount(product.id)}>+</button>{product.quantity}<button className="btn btn-primary" onClick={(event)=>this.props.decreaseProductCount(product.id)}>-</button></td>
                        
                            
                       
                    </tr>
                        )
                    }
                    )}
                  
                    
                </tbody>
                </table>
                <p>Total Price={bill}</p>

            </div>
            :<h1>No any Product to cart</h1>
     
        )
   
        
        }
}


const mapStateToProps=state=>{
    return {
        products:state.productCart,
        quantity:state.quantity,
        total:state.total
    }
}

const mapDispatchToProps=dispatch=>{
    
    return{
        increseProductCount:(id)=>dispatch(actionType.increseProductCount(id)),
        decreaseProductCount:(id)=>dispatch(actionType.decreaseProductCount(id)),
        //deleteProductCart:(id)=>dispatch(actionType.deleteProductCart(id)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(productcart);