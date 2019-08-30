import React,{Component} from 'react'
import axios from 'axios';

class AddProducts extends Component {
    constructor(props) {
      super(props);
      this.state = {
                    
        category:'',
        imageUrl:'',
        price:'',
        title:'',
        errorMsg:{
          category:'',
          imageUrl:'',
          price:'',
          title:''
      }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      event.preventDefault();
      console.log('coming');
      let refErrorMsg=this.state.errorMsg;
      
      switch (event.target.name) {
        case 'category':
         if(this.state.errorMsg.category =event.target.value.length <1 ? 'Category cant be empty!': '');
        else(this.state.errorMsg.category = event.target.value.length < 5? 'Category must be 5 characters long!': '');
        
          break;

          case 'imageUrl':
         if(this.state.errorMsg.imageUrl =event.target.value.length <1 ? 'imageUrl cant be empty!': '');
        else(this.state.errorMsg.imageUrl = event.target.value.length < 5? 'imageUrl must be 5 characters long!': '');
       
          break;

          case 'price':
         if(this.state.errorMsg.price =event.target.value.length <1 ? 'price cant be empty!': '');
        else(this.state.errorMsg.price = event.target.value.length < 1? 'price must be 1 characters long!': '');
       
          break;

          case 'title':
         if(this.state.errorMsg.title =event.target.value.length <1 ? 'title cant be empty!': '');
        else(this.state.errorMsg.title = event.target.value.length < 5? 'title must be 5 characters long!': '');
        
          break;

          
        default:
          break;

}
this.setState({[event.target.name]: event.target.value});
}

     handleSubmit=(e)=>{
      e.preventDefault();
      let category=false,imageUrl=false,price=false,title=false;
      console.log('Category length='+this.state.errorMsg.category.length);
      if(this.state.errorMsg.category.length>0){
        category=true;
      }
      if(this.state.errorMsg.imageUrl.length>0){
        imageUrl=true;
      }
      if(this.state.errorMsg.price.length>0){
        price=true;
      }
      if(this.state.errorMsg.title.length>0){
        title=true;
      }
      console.log(category,imageUrl,price,title);
      console.log(this.state.errorMsg.category.length,this.state.errorMsg.imageUrl.length,this.state.errorMsg.price.length,this.state.errorMsg.title.length)
      
      if((category==false)&&(imageUrl==false)&&(price==false)&&(title==false)){
     let  product={
         category:this.state.category,
         imageUrl:this.state.imageUrl,
         price:this.state.price,
         title:this.state.title

       }

        axios.post('http://localhost:3000/api/products',product)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        alert('Addded');
        
        
      }
      else{
        alert('Can not Submit');
      }
      
      



       
    } 


   /*  handleSubmit=(e)=>{
      e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/api/products',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
        alert('Addded');

    } */
      
   
  
    render() {
      const{category,imageUrl,price,title}=this.state
    return (
        <div >
      <form onSubmit={this.handleSubmit} >
      <div >
        <label>Category: 
          <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleChange}  class="form-control"/>
          </label>
          <div>{this.state.errorMsg.category}</div>
        </div>
        <div>
        <label>
          Image Url:
          <input type="text" name="imageUrl" placeholder="Image Url" value={imageUrl} onChange={this.handleChange} class="form-control" />
        </label>
        <div>{this.state.errorMsg.imageUrl}</div>
        </div>
        <div>
        <label>
       Price:
          <input type="text" name="price" placeholder="Price" value={price} onChange={this.handleChange} class="form-control" />
        </label>
        <div>{this.state.errorMsg.price}</div>
        </div>
        <div>
        <label>
          Title:
          <input type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange} class="form-control" />
        </label>
        <div>{this.state.errorMsg.title}</div>
        </div>
        <button disabled={(!this.state.title)} className="btn btn-primary">Add</button>
      </form>
      </div>
    );
  }
}

export default AddProducts;