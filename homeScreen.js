import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>
<View>  

<Text style = {styles.text}>✧Current Events✧</Text>

<Text style = {styles.text2 }>Whats Happening?</Text>

<Text style = {styles.text3}>Click Below to Find More!</Text>
  
</View> 
 
<TouchableOpacity style = {styles.button} onPress = {() =>
this.props.navigation.navigate("2020 Screen") 
}> 

<Text style = {styles.bluebutton}>Know about 2020 </Text> 
 
<Image style = {styles.twenty} 
source = {{
  uri:"https://image.shutterstock.com/image-vector/2020-year-coronavirus-covid19-pandemic-260nw-1732684226.jpg"
}} />

</TouchableOpacity>

<TouchableOpacity style = {styles.button}  onPress = {() =>
this.props.navigation.navigate("2021 Screen")
}>

<Text style = {styles.bluebutton} >Know about 2021</Text>

<Image style = {styles.twentyone} 
source = {{
  uri:"https://bloximages.newyork1.vip.townnews.com/djournal.com/content/tncms/assets/v3/editorial/1/4c/14c7059e-4aad-11eb-b08f-c38df97f7407/5fec91a06eca2.image.png"
}} />
 
</TouchableOpacity> 

<Image
style = {styles.image}
source = {{
  uri: "https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/jan2021/image_1.jpg"
}}/>

      </View>
    )
     
  }
}

const styles = StyleSheet.create({
    
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignItems: "center",
        marginTop:20,
        marginLeft: 78,
        fontFamily:'timesnewroman'
    },
    button: {
       marginTop: 20,
    width: 200,
    alignSelf: 'center',
    height: 80,
    textAlign: 'center',  
    borderWidth: 3,
    outline: 'none', 
     borderRadius:30,
     backgroundColor:'#f0e3d8',  
     fontSize:20
       
  

    }, text2: {    
        fontSize: 20,
        color: "white",
        alignItems: "center",
        marginLeft: 80,
        fontFamily:"timesnewroman",
        fontWeight:"bold"
        

    }, text3: {
        fontSize: 15,  
        color: "black",
        alignItems: "center", 
        marginLeft: 73,
        fontFamily:"timesnewroman",
                fontWeight: "bold",
 
    },
    image:{
      width: 280,
      height:215, 
      marginLeft: 25, 
      marginTop: 20
      
    },
    bluebutton:{
      fontSize:18,
      fontFamily:'Georgia',
    },
    twenty:{
      width:90,
      height:50,
      marginLeft:50
    },
    twentyone:{
      width:90,
      height:50,
      marginLeft:50
    },
    background:{
      backgroundColor: "#e8be97"
    }
});
