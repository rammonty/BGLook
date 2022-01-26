
import React, { Component } from 'react';
import { View, Text, Image ,Dimensions , BackHandler} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 3 / 4);
const imageWidth = dimensions.width;

class MyClass extends Component {

  

    componentDidMount()
    {
        setTimeout(async ()=>{

               // this.props.navigation.navigate("Intro")
               this.props.navigation.replace('Intro')

        },3000);
    }

    render() {
        return (
            <View style={{flex:1}}>


            <View style={{flex:1,alignItems:"center",marginTop:50}}>
                <Image
                    style={{width:imageWidth,height:imageHeight +10,marginBottom:-16}}
                    resizeMode="contain"
                    source={require('../../images/logo.png')}
                    
                    />
            </View>
            
            <View style={{flex:1,alignItems:"center",marginTop:32}}>

                <Text style={{//fontFamily:"Lato-BoldItalic",
                fontSize:20,color:"#2E4D7B" ,marginTop:16}}>{"India's Salon marketing Services"}</Text>
        

            </View>

            </View>
        );
    }
}

export default MyClass;