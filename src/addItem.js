import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';
import MyButton from './button';

const AddItem = (props)=>(
 
    <View style={styles.textView}>
      <TextInput 
       style={styles.textInput}
       placeholder= 'a useless place holder'
       value={props.value} 
       onChangeText={props.onChangeText}/>
      <MyButton onPressButton={props.onPressButton}/>
      </View>

);

const styles =StyleSheet.create({
  textView:{
    // flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput:{
    width:'70%', 
    borderBottomColor: "blue",
    borderBottomWidth:1, 
  }
});


export default AddItem;