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
        password:"",
        isChecked:false,
        isBtnLoading:false,
        isBtnLoadingForgot:false,
        
    }
    SignUp() {
        this.props.navigation.navigate("SignUp")
    }
    forgot() {
   
        this.props.navigation.navigate("Forgot password")
     
     }
    render() {
        return (
            <ScrollView>
        <View style={{flex:1}}>
            
        <View style={{flex:1,alignItems:"center"}}>
                <Image
                    style={{width:250,height:300,marginBottom: - 100}}
                    resizeMode="contain"
                    source={require('../../images/logo.png')}
                    
                    />
            </View>
           
                <View style={{flex:1 ,justifyContent:"center",top:20 ,paddingHorizontal:10}}>

                <TextInput
               
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}

                    underlineColorAndroid="#000"
                    placeholder="Enter Register Mobile Number"
                    onChangeText={(mobileNo)=> {
                        this.state.mobileNo = mobileNo
                        this.setState({})
                    }}
                   // keyboardType="normal"
                    textAlign="center"
                    value={this.state.mobileNo}
                />
                  <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(password)=> {
                        this.state.password = password
                        this.setState({})
                    }}
                    textAlign="center"
                    value={this.state.password}
                />
               
                </View>
                <TouchableOpacity 
                          disabled={this.state.isBtnLoading}
                          onPress={()=> this.login()}
                          style={{
                              backgroundColor:"#FD685A",
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
                                 fontSize: 20,color:"#fff" }}>{"LOGIN IN"}</Text>
                            }
                          </TouchableOpacity>
                          <TouchableOpacity 
                          disabled={this.state.isBtnLoadingForgot}
                          onPress={()=>this.forgot()}
                          style={{
                              alignItems:"center",
                              justifyContent:"space-around",
                              alignSelf:"center",
                              marginBottom:40,
                              flexDirection:"row"
                          }}>
{this.state.isBtnLoadingForgot ? <ActivityIndicator color="#2E87AA"/> : 
                                <Text style={{ //fontFamily: "Lato-Regular",
                                fontSize: 17,color:"#2E4D7B",marginTop: 8 ,textAlign: "center" }}>{"Forgot Pssword?"}</Text>
                            }
                          </TouchableOpacity>

                          <TouchableOpacity 
                          disabled={this.state.isBtnLoadingForgot}
                          onPress={()=>this.SignUp()}
                          style={{
                              alignItems:"center",
                              justifyContent:"space-around",
                              alignSelf:"center",
                              marginBottom:40,
                              flexDirection:"row"
                          }}>
                      {this.state.isBtnLoadingForgot ? <ActivityIndicator color="#2E87AA"/> : 
                                <Text style={{ //fontFamily: "Lato-Regular",
                                fontSize: 22,color:"#0D164B",marginTop: 8 ,textAlign: "center" }}>{"New User ? Sign UP"}</Text>
                            }
                          </TouchableOpacity>

                          <TouchableOpacity 
                          disabled={this.state.isBtnLoading}
                          onPress={()=> this.login()}
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
                                 fontSize: 20,color:"#0D164B" }}>{"BUSINESS WITH US"}</Text>
                            }
                          </TouchableOpacity>
                         
            </View>
            </ScrollView>
        );
    }
}


export default MyClass;
