
import React, { Component } from 'react';
import { View, Text, Alert,Image,Dimensions,TouchableOpacity,Keyboard ,TextInput, ActivityIndicator,ScrollView} from 'react-native';
import IconMC from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast'
import OTPInput from 'react-native-otp';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 3 / 4);
const imageWidth = dimensions.width;
class MyClass extends Component {

    state={
        otp: '',
        confirmPassword:"",
        isBtnLoading:false,
        isBtnLoadingForgot:false,
        
    }
    handleOTPChange = (otp) => {
        this.setState({ otp })
      }
  update() {
    this.props.navigation.navigate("Login")
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
                            fontSize: 24,color:"#0D164B",borderRadius:10, marginTop: 20 }}>{"CONFIRMATION"}</Text>
                 <View style={{flex:1,justifyContent:"center", borderWidth: 0.7,margin: 8}}>       
                    <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 20,color:"#0D164B",textAlign:"center", marginTop: 10 }}>{"Verification code sent to "}</Text>
                            <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 18,color:"#0D164B",textAlign:"center", marginTop: 10 }}>{"+91 8754213457"}</Text> 
                            <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 18,color:"#0D164B",textAlign:"center", marginTop: 10 }}>{"Don't receive code?"}</Text>
                             <TouchableOpacity 
                          disabled={this.state.isBtnLoading}
                          onPress={()=> this.update()}
                          style={{
                             // backgroundColor:"#FDCE64",
                              borderRadius:8,
                              height:50,
                              width:300,
                              elevation:3,
                              alignItems:"center",
                              justifyContent:"space-around",
                              alignSelf:"center",
                              marginBottom:20,
                              margin:10,
                          }}>
                       {this.state.isBtnLoading ? <ActivityIndicator color="#fff"/> : 
                                <Text style={{ //fontFamily: "Lato-Regular",
                                 fontSize: 20,color:"#FD685A" }}>{"Resend Code"}</Text>
                            }
                          </TouchableOpacity>
                    
                </View>
                <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 20,color:"#0D164B",textAlign:"center", marginTop: 20 ,bottom:20}}>{"45 Sec "}</Text>
                <OTPInput
                    value={this.state.otp}
                    onChange={this.handleOTPChange}
                    tintColor="#FB6C6A"
                    offTintColor="#BBBCBE"
                    otpLength={4}
                />
                 <Text style={{ //fontFamily: "Lato-Bold",
                            fontSize: 20,color:"#0D164B",textAlign:"center", top: 20 ,bottom:20}}>{"Enter Code "}</Text>
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
                                 fontSize: 20,color:"#0D164B" }}>{"VERIFY"}</Text>
                            }
                          </TouchableOpacity>
                         
            </View>
            </ScrollView>
        );
    }
}


export default MyClass;
