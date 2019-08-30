import  axios from 'axios';
export const GETALLPRODUCT ='GETALLPRODUCT';
export const GETSPECIFICFRUITSPRODUCT='GETSPECIFICFRUITSPRODUCT';
export const DELETEPRODUCT='DELETEPRODUCT';
export const ADDPRODUCTTOCART='ADDPRODUCTTOCART';
export const INCREASEPRODUCTCOUNT='INCREASEPRODUCTCOUNT';
export const DECREASEPRODUCTCOUNT='DECREASEPRODUCTCOUNT';
export const DELETEPRODUCTCART='DELETEPRODUCTCART';

export const setAllProduct=(getData)=>{
    return{
        type:'GETALLPRODUCT',
        value:getData
    } 
}

export const setDeleteProduct=(id)=>{
    return{
        type:'DELETEPRODUCT',
        value:id
    }
}

export const getAllProduct = () => {
    return dispatch => {
        axios.get('http://localhost:3000/api/products')
        .then(response => {
            dispatch(setAllProduct(response.data))
        })
    } 
   
}

export const deleteProduct=(id)=>{
    console.log('Id='+id);
    return dispatch=>{
        axios.delete('http://localhost:3000/api/products/'+id)
        .then(response=>{
            console.log(response.data.id);
            dispatch(setDeleteProduct(response.data.id))
        })
    }
}

export const editProduct=(id)=>{
    console.log('Id='+id);
   
}

export const editFormProduct=(id)=>{
    console.log('Id='+id);
   
}

export const addProductToCart=(id)=>{
    console.log(id);
    return{
        type:'ADDPRODUCTTOCART',
        value:id
    } 
}

export const increseProductCount=(id)=>{
    console.log(id);
    return{
        type:'INCREASEPRODUCTCOUNT',
        value:id
    } 
}

export const decreaseProductCount=(id)=>{
    console.log(id);
    return{
        type:'DECREASEPRODUCTCOUNT',
        value:id
    } 
}

export const deleteProductCart=(id)=>{
    console.log(id);
    return{
        type:'DELETEPRODUCTCART',
        value:id
    } 
}