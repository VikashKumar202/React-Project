import React,{Component} from 'react';
import BackgroundImage from '../../assets/Fruits_Vegetables.jpg'

class home extends Component{

    render(){
        const imageStyle={
        backgroundImage: `url(${BackgroundImage})`,
        height: "600px",
      };
        return(
            
            
            <div style={imageStyle} >
            
            </div>
            
        )}
       
    
}

export default home;