import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class Screen1 extends React.Component{
  render(){
    return(
      <View style = {styles.background}>
      <Text style = {styles.text1}>2020</Text>

<TouchableOpacity onPress = {() =>
this.props.navigation.navigate("Covid")
}> 
<Image source = {require("../images/covid-19image.jpeg")} style = {styles.iconImage}></Image> 

<Text style = {styles.button} >Coronavirus🦠</Text>
</TouchableOpacity>

<TouchableOpacity  onPress = {() =>
this.props.navigation.navigate("BLM")
}>

<Image source = {require("../images/blmimage.jpg")} style = {styles.iconImage}></Image> 
<Text style = {styles.button} >BLM✊🏽</Text>

</TouchableOpacity>

<TouchableOpacity  onPress = {() =>
this.props.navigation.navigate("Climate Change")
}>
<Image source = {require("../images/australianfiresimage.jpeg")} style = {styles.iconImage}></Image> 

<Text style = {styles.button} >Climate Change🔥</Text>

</TouchableOpacity>
 
<TouchableOpacity  onPress = {() =>
this.props.navigation.navigate("Stock Market")
}> 

<Image source = {require("../images/stockmarketcrash.jpeg")} style = {styles.iconImage}></Image> 


<Text style = {styles.button} >Stock Market Crash📈 </Text>

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
     color:"black",
     
 

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
