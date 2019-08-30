import React from 'react'
import './App.css'
import Products from './components/Products/products'
import Navigation from './components/Navigation/Navigation';
import Admin from './Admin/AddProducts';
import EditProduct from './Admin/EditProducts';
import EditFormProduct from './Admin/EditFormProduct';
import productcart from './components/Products/productcart';


import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {

  const editProduct=(productId)=>{
    console.log(productId);
  }
  return (
    <div className="App">
     
      <h1>Welcome TO Online Organic Store</h1>
      <BrowserRouter>
      <div className="App">
     <Navigation/>
     <Switch>
     <Route exact path="/"  render={()=><h1>Home Page</h1>} ></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/AddProducts" component={Admin}></Route>
      <Route path="/EditProducts" component={EditProduct}></Route>
      <Route path="/EditFormProduct" component={EditFormProduct}></Route>   
      <Route path="/productcart" component={productcart}></Route>      
      </Switch> 
    </div>
    </BrowserRouter>
 
    
      

    </div>
  );
}

export default App;
