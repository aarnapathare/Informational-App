import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class ClimateChange extends React.Component{
  render(){
    return(
       <View style = {styles.background}>
<SafeAreaView/>


<View >
<Text style = {styles.text1}>Climate Change</Text>

<Text style = {styles.text3}>Climate change has been going on for the past hundreds and thousands of years. Each year our earth is closer and closer to becoming uninhabitable and unsuitable for humans to live on. The living conditions get worse day by day and can be seen with the many events happening in the past couple of years. An example of this was the Australian fires that took place in January 2020, when the fires went on for 79 days without any rain. Families and farmers were devastated as their land was burning with unstoppable speed. After a long 11-12 weeks, Australia experienced rain bringing hope and relief to those around them. Even though the rain was not enough to stop the fires, they were grateful to experience it. After the fires died down, Australia and the rest of the world were able to see the amount of damage the wildfires created. About 46 million acres of land was burned, taking around 3,500 houses and building around, resulting in around 35 injured and dead. This is just one example of how climate change is affecting the way we humans live on earth. If we can't find a way to change our living habits, soon our next generations won't have a place to stay. 
</Text>   
<Image style = {styles.image} 
source = {{
  uri:"https://www.cnet.com/a/img/WALBPGnxqwF52FP1xJ7VcduDI5g=/940x528/2021/08/09/11a90783-8a2a-4401-be9f-acd1d799138d/greekfires1.jpg"
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
      width:250,
      height:150,
      marginLeft:50

    }
});

