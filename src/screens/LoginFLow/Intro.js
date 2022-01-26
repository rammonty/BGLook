
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity ,BackHandler} from 'react-native';
import IconFO from 'react-native-vector-icons/MaterialIcons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFOS from 'react-native-vector-icons/FontAwesome5';



const dimensions = Dimensions.get('window');

const imageHeight = Math.round(dimensions.width * 3 / 4);
const imageWidth = dimensions.width;


class MyClass extends Component {




    render() {
        return (
         


                    <View style={{ flex: 1 }}>

                        <View>
                            <Image
                                style={{ width: imageWidth, height: imageHeight, marginBottom: - 64 }}
                                resizeMode="contain"
                                source={require('../../images/intro_img_2x.png')}
                                />
                        </View>

                        <View style={{ marginTop: 16, marginHorizontal: 24 }}>

                            <View style={{ alignItems: "center", }}>
                                <Text style={{ //fontFamily: "Lato-Bold",
                                 fontSize: 32,color:"#0D164B", marginTop: 64 }}>{"Book a Visit"}</Text>
                                 <Text style={{ //fontFamily: "Lato-Bold",
                                 fontSize: 32,color:"#0D164B", marginTop: 10 }}>{"Easy and Fast"}</Text>
                                <Text style={{ //fontFamily: "Lato-Regular",
                                 fontSize: 17,color:"#2E4D7B",marginTop: 10 ,textAlign: "center" }}>{"Find the best barber near you and book a dream visit."}</Text>

                            </View>

                           

                        </View>

                        <View style={{ flex: 1, }} />

                          
                          <TouchableOpacity 
                          onPress={()=> {
                            this.props.navigation.replace("Login")
                          }}
                          style={{
                              backgroundColor:"#FDCE64",
                              borderRadius:4,
                              height:50,
                              width:250,
                              elevation:3,
                              alignItems:"center",
                              justifyContent:"space-around",
                              alignSelf:"center",
                              margin:20,
                          }}>
                                <Text style={{ //fontFamily: "Lato-Regular",
                                 fontSize: 20,color:"#0D164B" }}>{"LET'S START"}</Text>
                                

                          </TouchableOpacity>
                          
                       

                    </View>
        );
    }
}

export default MyClass;
