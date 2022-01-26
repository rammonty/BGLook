import React, { Component } from 'react';
import { View, Text, Alert,Image,Dimensions,TouchableOpacity,Keyboard ,TextInput, ActivityIndicator,ScrollView} from 'react-native';
import IconMC from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 3 / 4);
const imageWidth = dimensions.width;
class MyClass extends Component {

    state={
        shopName:"",
        businessOwnerName:"",
        mobileNo:"",
        Gender:"",
        email:"",
        password:"",
        confirmPassword:"",
        location:"",
        isBtnLoading:false,
        isBtnLoadingForgot:false,
        
    }
   
  sendOTP() {
    this.props.navigation.navigate("Send OTP")
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
           
                <View style={{flex:1 ,justifyContent:"center",top:20 ,paddingHorizontal:10}}>
                <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 24,color:"#0D164B", marginTop: 20 }}>{"CREATE NEW ACCOUNT"}</Text>
                
                  <TextInput
                    
                    style={{ height: 40,
                        margin: 20,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8,
                        top:10
                    }}
                    underlineColorAndroid="#000"
                    placeholder="Shop Name"
                   // secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(shopName)=> {
                        this.state.shopName = shopName
                        this.setState({})
                    }}
                    //textAlign="center"
                    value={this.state.shopName}
                />
               <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="Business Owner Name"
                    //secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(businessOwnerName)=> {
                        this.state.businessOwnerName = businessOwnerName
                        this.setState({})
                    }}
                    //textAlign="center"
                    value={this.state.businessOwnerName}
                />
                 <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="Mobile Number"
                   // secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(mobileNo)=> {
                        this.state.mobileNo = mobileNo
                        this.setState({})
                    }}
                    //textAlign="center"
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
                    placeholder="Gender"
                   // secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(Gender)=> {
                        this.state.Gender = Gender
                        this.setState({})
                    }}
                    //textAlign="center"
                    value={this.state.Gender}
                />
                 <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="Email"
                    //secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(email)=> {
                        this.state.email = email
                        this.setState({})
                    }}
                   // textAlign="center"
                    value={this.state.email}
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
                  //  textAlign="center"
                    value={this.state.password}
                />
                 <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="confirm New Password"
                    secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(confirmPassword)=> {
                        this.state.confirmPassword = confirmPassword
                        this.setState({})
                    }}
                    //textAlign="center"
                    value={this.state.confirmPassword}
                />
                 <TextInput
                    
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: 0.7,
                        padding: 8,
                        borderRadius:8
                    }}
                    underlineColorAndroid="#000"
                    placeholder="Location"
                    secureTextEntry={true}
                    autoCompleteType="off"
                    onChangeText={(location)=> {
                        this.state.location = location
                        this.setState({})
                    }}
                   // textAlign="center"
                    value={this.state.location}
                />
                </View>
               
                     <TouchableOpacity 
                          disabled={this.state.isBtnLoading}
                          onPress={()=> this.sendOTP()}
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
                                 fontSize: 20,color:"#0D164B" }}>{"SIGN UP"}</Text>
                            }
                          </TouchableOpacity>
                         
            </View>
            </ScrollView>
        );
    }
}


export default MyClass;
