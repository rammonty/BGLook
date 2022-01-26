//import liraries
import React, { Component } from 'react';
import { View, Text, Alert,Image,Dimensions,TouchableOpacity,Keyboard ,TextInput, ActivityIndicator,ScrollView} from 'react-native';
import IconMC from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 3 / 4);
const imageWidth = dimensions.width;
class MyClass extends Component {

    state={
       
        mobileNo:"",
        confirmPassword:"",
        isBtnLoading:false,
        isBtnLoadingForgot:false,
        
    }
   
  update() {
    this.props.navigation.navigate("Verify OTP")
  }
    render() {
        return (
        <ScrollView>
        <View style={{flex:1}}>
            
        <View style={{flex:1,alignContent:"center", borderWidth: 0.7,margin: 8, backgroundColor:"#fff"}}>
            
                <Image
                    style={{width:250,height:80}}
                    resizeMode="contain"
                    source={require('../../images/intro_img_2x.png')}
                    
                    />
            </View>
           
                <View style={{flex:1 ,justifyContent:"center",top:20 ,paddingHorizontal:10,marginBottom:100}}>
                <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 24,color:"#0D164B", marginTop: 20 }}>{"Enter your mobile number"}</Text>
                
                  <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="contact Number"
                   // secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(mobileNo)=> {
                        this.state.mobileNo = mobileNo
                        this.setState({})
                    }}
                    textAlign="center"
                    value={this.state.mobileNo}
                />
               
                </View>
               
                     <TouchableOpacity 
                          disabled={this.state.isBtnLoading}
                          onPress={()=> this.update()}
                          style={{
                              backgroundColor:"#FDCE64",
                              borderRadius:8,
                              height:50,
                              width:300,
                              elevation:3,
                              alignItems:"center",
                              justifyContent:"space-around",
                              alignSelf:"center",
                              marginBottom:20,
                              margin:40,
                          }}>
                       {this.state.isBtnLoading ? <ActivityIndicator color="#fff"/> : 
                                <Text style={{ //fontFamily: "Lato-Regular",
                                 fontSize: 20,color:"#0D164B" }}>{"SEND OTP"}</Text>
                            }
                          </TouchableOpacity>
                         
            </View>
            </ScrollView>
        );
    }
}


export default MyClass;
