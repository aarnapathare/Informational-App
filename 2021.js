import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class Screen2 extends React.Component{
  render(){
    return(

<View style = {styles.background}>
<Text style = {styles.text1}>2021</Text>

<TouchableOpacity onPress = {() =>
this.props.navigation.navigate("School")
}>
<Image source = {require("../images/bts.jpeg")} style = {styles.iconImage}></Image> 

<Text style = {styles.button} >School📗</Text>
</TouchableOpacity>


<TouchableOpacity onPress = {()=> 
this.props.navigation.navigate("PPV")
}> 

<Image source = {require("../images/ppv.png")} style = {styles.iconImage}></Image>
<Text style = {styles.button}>Pride Parade Violence🏳️‍🌈</Text>
</TouchableOpacity>


<TouchableOpacity onPress = {()=>
this.props.navigation.navigate("Taliban")
}>

<Image source = {require("../images/ttimage.jpeg")} style = {styles.iconImage}></Image>
<Text style = {styles.button}>Talibans Control
🇦🇫</Text>
</TouchableOpacity> 

</View>


    )
     
  }
}

const styles = StyleSheet.create({
    
    text1: {  
        fontSize: 40,
        fontWeight: "bold", 
        color: "black", 
        alignItems: "center",
        marginTop:20,
        marginLeft: 120 
    },
    button: {
       marginTop:-75, 
    width: 200,
    alignSelf: 'center',
    height: 80,
    textAlign: 'center',
    borderWidth: 3, 
    outline: 'none',
     borderRadius:30,
     backgroundColor:'#f0e3d8', 
     fontSize:16,
     color: "black"
     


    },
    iconImage:{
      width:70, 
      height: 50,  
      marginLeft:130,
      marginTop:60,

    },
    background:{
      backgroundColor: "#e8be97"
    }
});
