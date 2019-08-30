import React,{Component} from 'react';
import axios from 'axios';
import tableStyle from './Form.css';
import Axios from 'axios';
import Admin from './EditFormProduct';
import {Link,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actionType from '../store/actions';
import app from '../App';



class EditProducts extends Component{
    constructor(props){
        super(props)

        this.state={
            tempArrProducts:[],
            errormsg:[]
        }
    }

    

    /* componentDidMount(){
        axios.get('http://localhost:3000/api/products')
        .then(response =>{
            console.log(response)
            this.setState({arrProducts:response.data})
            
        }).catch(error =>{
            console.log(error)
            this.setState({errormsg:'Error retriving data'})
        })
    } */

    /* editProductHandler=(event)=>{
        console.log('Edit Product');
        let id=event.target.value;
        console.log('------'+id);

            this.state.arrProducts.filter(product =>{
                if(product.id == id){
                    console.log(product)
                    return (<h1>Hello</h1>)
                }

            })

            
                
    } */

     deleteProductHandler=(event)=>{
        event.preventDefault();
        console.log('Delete Product'+event.target.value);
        
        Axios.delete('http://localhost:3000/api/products/'+event.target.value, {
        
    }).then(response => {
        this.setState({arrProducts:response.data})
        //window.location.reload();
    }) .catch(error => {
        this.setState({errormsg:'Error in deleting data' })
    }) 
   
} 

    
    
    render(){         

        const products=this.props.products;
        console.log(products)
       
        

       // const {tempArrProducts,errormsg}=this.state
        return(

            <div>
                
                <h1>All Products</h1>
                <table className="tableStyle">
                    <tbody><tr><th>Category</th><th>Name</th><th>Price</th><th>Action</th><th>Action</th></tr>
                  {
                    products.map(product => 
                    <tr key={product.id}>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td><Link to={{ pathname: '/EditFormProduct', 
                        state: {
                             id: product.id,
                             category:product.category,
                             title:product.title,
                             price:product.price,
                             imgUrl:product.imageUrl
                             

                             } }}   >Edit</Link></td>
                        {/* <td><button onClick={()=>this.props.editProduct(product.id)}>Edit</button></td> */}
                        <td><button class="btn btn-danger" onClick={()=>this.props.deleteProduct(product.id)}>Delete</button></td>
                    </tr>
                   
                    )}
                    
                </tbody>
                </table>
                

            </div>
            
     
        )
   
        
        }
}

const mapStateToProps=state=>{
    return {
        products:state.arrProducts
    }
}

const mapDispatchToProps=dispatch=>{
    
    return{
        editProduct:(id)=>dispatch(actionType.editProduct(id)),
        deleteProduct: (id) => dispatch(actionType.deleteProduct(id)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(EditProducts);