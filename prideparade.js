import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class PPV extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>


<View >
<Text style = {styles.text1}>Pride Parade Violence</Text>
<Text style = {styles.text3}>We teach our younger generations many things such as being kind to one another, and understanding everyones point of view, but something that is not being talked about enough is diversity in identity. Older generations see a relationship consisting on a male and female and nothing else, but as we learn more as a society and accept those around us, we see how different and unique everyone is. Being part of the LGTBQ+ community is hard for the reason of acceptance. People dont have the ability to accept and undertsand the person, and this causes a lot of hate towards them. With so much negativity and hate going towards the LGTBQ community, many find it hard to come out to family and loved ones in fear that the people that they are close to will disaprove of them because they dont fall under the category of "normal" people. The LGTBQ+ pride day is a special day because it celebrates gay rights, coming out, etc, and it is a chance for youngers, and well as older generations to learn about the community, as well as its history. Even though pride day is a special day for the community, pride day is a scary and dangerous day for those who celebrate it with all the hate that goes to the community. From places all around the world such as Canada, Poland, Uruguay, United States, Uganda and more. So many people share their stories about violence, and it is disheartening to hear how one persons beliefs and choses can affect those around them. </Text> 


<Image style = {styles.image} 
source = {{ 
  uri:"https://ktla.com/wp-content/uploads/sites/4/2021/11/AP20128635572227.jpg?w=2560&h=1440&crop=1"
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
    },image:{
      width:220,
      height:150,
      marginLeft:60 
     }
});

