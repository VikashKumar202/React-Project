import React,{Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {editFormProduct} from '../store/actions'


class EditFormProduct extends Component {
    constructor(props) {
      super(props);
      this.state = {    
        id:'',        
        category:'',
        imageUrl:'',
        price:'',
        title:'',
                    };
  
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      console.log(this.props)
      let id=this.props.location.state.id;
      let imgUrl=this.props.location.state.imgUrl;
      let category=this.props.location.state.category;
      let title=this.props.location.state.title;
      let price=this.props.location.state.price;
      console.log('Id through Link:'+id);


      this.setState({
        category:this.props.location.state.category,
        imageUrl:this.props.location.state.imgUrl,
        title:this.props.location.state.title,
        price:this.props.location.state.price
       
      })




     
       console.log(this.state.category);
     /* const filterArr=this.props.products.filter(product=>product.id==id);
      console.log(filterArr);
      this.setState({
        updatedPro:[...filterArr]
      })
 */
      

      

    }
  
     handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
const data={
category:this.state.category,
imageUrl:this.state.imageUrl,
price:this.state.price,
title:this.state.title
}
console.log("after setstatte", this.state)
e.preventDefault();
      axios.put('http://localhost:3000/api/products/'+this.props.location.state.id,data)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        alert('Addded');
        console.log('Updated');
    } 

    render() {
     
      
        const{category,imageUrl,price,title}=this.state
      return (
        
          <div className="form-group">

        <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Category:
            <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleChange} class="form-control" />
            
          </label>
          </div>
          <div>
          <label>
            Image Url:
            <input type="text" name="imageUrl" placeholder="Image Url" value={imageUrl} onChange={this.handleChange} class="form-control"/>
           
          </label>
          </div>
          <div>
          <label>
         Price:
            <input type="text" name="price" placeholder="Price" value={price} onChange={this.handleChange} class="form-control"/>
           
          </label>
          </div>
          <div>
          <label>
            Title:
            <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange} class="form-control"/>
            
          </label>
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
        </div>
      );
    }
  }


  const mapStateToProps=state=>{
    return {
        products:state.arrProducts
    }
}

const mapDispatchToProps = dispatch => {
  return {
    editFormProduct: () => dispatch(editFormProduct.editFormProduct()),
     // getSpecificFruitsProduct:()=>dispatch({type:actionType.GETSPECIFICFRUITSPRODUCT,value:'fruits'})
    
  }
};

export default connect(mapStateToProps,null)(EditFormProduct);