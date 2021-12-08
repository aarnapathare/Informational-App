import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class BackToSchool extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>


<View >
<Text style = {styles.text1}>School in 2021</Text>
 
<Text style = {styles.text3}>After a rough start to distance learning in 2020, and a long year of zoom calls, school is back in sesion! School has now opened in person for many states around the United States and many are scared. With school being back in-person, can we trust young kids, as well as teenagers to keep their masks on and sanitize their hands when necessary? It is in everyones best interest that children maintain their distance and continue hygiene until we can eliminate COVID-19. New precautions are being made by school districts to enure that not only is every faculty member and student healthy, but also to keep schools from shutting down again. With is being almost 4 months of school, many school disrticts are happy with the current status and are hoping a smooth rest of the year! </Text>
</View>
<Image style = {styles.image} 
source = {{
  uri:"https://i.insider.com/613b6759a30aeb0018b4e615?width=700"
}} />
 
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

