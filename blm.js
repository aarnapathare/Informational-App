import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class BLM extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>
  

<View >
<Text style = {styles.text1}>Black Lives Matter</Text>

<Text style = {styles.text3}>“Black Lives Matter" was a movement that was started in 2013, but got the attention of the world when a young black man George Flyod was murdered in broad daylight by a policeman in Minneapolis. This movement turned into peaceful protests all around the United States to stand against police brutality and violence targeted towards African-Americans. Some thought that the movement “Black Lives Matter” was putting the lives of the African-American before others, but failed to understand the true meaning of the movement. The phrase means that all black lives matter in the world of racism and cruelty. It is no surprise that people of color get treated differently and most often pay the price in many ways. In the past year, some innocent people that died because of police brutality were Daunte Wright, Andre Hill, Manuel Ellis, Rayshard Brooks, Daniel Prude, George Floyd, Breonna Taylor, Atatiana Jefferson, and many more. Understanding the term BLM helps those around the world to know the harsh reality of the lives of people of color and what they have to face because of their race.
</Text> 

<Image style = {styles.image} 
source = {{
  uri:"data:image/jpeg;base64,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"
}} />

</View>  


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
        marginLeft: 75 
    }, text3: {
       
        fontSize: 12,
        alignItems: "center",
       fontWeight: "bold",
        color: "white",
       
    },
    background:{
      backgroundColor: "#e8be97"
    },
    image:{
      width:200,
      height:150,
      marginLeft:80 
    }
});

