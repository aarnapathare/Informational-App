import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class StockMarket extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>

 
<View > 
<Text style = {styles.text1}>Stock Market Crash</Text> 

<Text style = {styles.text3}>In america, a little more than half of the population own stocks in major companies such as apple, google, tesla and more. The stock market is when people can buy "shares" of any company they chose if they are public. Buying a stock means you have a very small percentage of ownership of the company. Investing in stocks has both its ups and downs, but can be a huge game changer when one profits from the stocks bought. In the year 2020, many people around the United States faced panic and worry when the stock market crashed, meaning that the prices for each stock plummeted resulting in many people loosing thousands of dollars which was invested. The sudden crash was a direct result of the coronavirus (which can be read in the 2020 screen) because many buinesses closed down which resulted in fewer buys. 
</Text> 
<Image style = {styles.image} 
source = {{
  uri:"https://caltech-prod.s3.amazonaws.com/main/images/CollinCamerer-ShortSelling-0.2e16d0ba.fill-1600x810-c100.jpg"
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
        marginLeft: 90
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

