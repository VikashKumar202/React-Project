import * as actionType from './actions'
const initialProductState = {
    arrProducts:[],
    tempArr:[],
    productCart:[]
};
let tempCartArr=[]
let productStatus=false

const reducer = (state = initialProductState, action) => {

    /* if(actionType.GETALLPRODUCT){
        return{
            ...state,
            arrProducts:action.value
        }
    } */
    switch(action.type){

        case actionType.GETALLPRODUCT:
        return {
            ...state,
            arrProducts:action.value,
            tempArr:action.value
            
        }

        case actionType.DELETEPRODUCT:
        let updatedArray=state.arrProducts;
        console.log("value in reducer:"+action.value);
        updatedArray=updatedArray.filter(product=>product.id!==action.value);
        return {
            
            ...state,
           arrProducts:updatedArray
            
        }

        case actionType.DECREASEPRODUCTCOUNT:

      // console.log("value in reducer:"+action.value);
        let products=state.productCart.find(product=>product.id===action.value)
       // console.log('Quantitty'+products.quantity );
        products.quantity -= 1

       if(products.quantity <= 0){
        var index = state.productCart.indexOf(products);
       // console.log('========='+index);
        let pro=state.productCart.splice(index,1);
       }
       
        return {
            
            ...state,
            quantity:products.quantity
            
        }
        
        case actionType.INCREASEPRODUCTCOUNT:

        console.log("value in reducer:"+action.value);
        let product=state.productCart.find(product=>product.id===action.value)
        console.log('Quantitty'+product.quantity );
        product.quantity += 1
        let total=(product.price*product.quantity);
        console.log('prise='+total)
        
       
        return {
            
            ...state,
            quantity:product.quantity,
            total:total,

            
        }

        case actionType.DELETEPRODUCTCART:

        console.log("deleted value in reducer:"+action.value);
        var indexOf = state.productCart.indexOf(action.value);
        console.log('========='+indexOf);
        let pro=state.productCart.splice(indexOf,1);
       
       
        return {
            
            ...state,
            productCart:pro,
            
        }

        case actionType.ADDPRODUCTTOCART:
      
        /* for(let i=0;i<state.productCart.length;i++){
            if(state.productCart[i].id===action.value){
                productStatus=true
                alert('Already Added!!')
            }
        }
       
        let quantity=1
        if(productStatus===false){
            for(let i=0;i<state.arrProducts.length;i++){
                if(state.arrProducts[i].id===action.value){
                    tempCartArr.push(state.arrProducts[i])
                    
                    tempCartArr.quantity=quantity ;
                    alert('Added');
                    console.log(tempCartArr);
                }
            }
        }
        productStatus=false;

        return{
            ...state,//initital state
            productCart:  [...tempCartArr,quantity]
            
        }; */
    console.log('---------'+action.value)
    let addedPdt=state.arrProducts.find(product=>product.id===action.value)
    let existedPdt=state.productCart.find(product=>product.id===action.value)

    if(existedPdt)
    {
    alert('Already Added')
    //addedPdt.quantity += 1 
    return{
    ...state,
   //total: state.total + addedPdt.price 
    }
    }
    else{
    alert('New added')
    addedPdt.quantity = 1;
    addedPdt.total=addedPdt.price ;
    //let newTotal = state.total 
    return{
    ...state,
    productCart:[...state.productCart,addedPdt],
    //total:newTotal
    }
    }  
    }

    
   
    return initialProductState;
};

export default reducer;