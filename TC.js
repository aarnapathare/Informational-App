import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class TC extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>


<View >
<Text style = {styles.text1}>Talibans Control</Text>

<Text style = {styles.text3}>Hearing about the Talibans control on Afghanistan  surprise and shock to the world. The Taliban are a group of people that was formed in 1994 with the aim to push their religion and their beliefs as well as remove any foreigner beliefs. One of their most dangerous and eventful attacks was on September 11, 2001, on the World Trade Center tower in New York City. The attack impacted thousands, and still does today. After the tragic attack, US military drove the Taliban away, and after almost two decades, the Taliban military were able to gain control over Afghanistan's capital again within a matter of a couple of days.</Text>

<Image style = {styles.image} 
source = {{
  uri:"https://images.hindustantimes.com/img/2021/08/13/1600x900/AFP_9L32Y2_1628849007191_1628849019915.jpg"
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
      width:220,
      height:150,
      marginLeft:60 
     }
});

