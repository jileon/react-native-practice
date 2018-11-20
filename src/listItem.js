import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';


const ListItem = (props)=>(
<TouchableWithoutFeedback onPress={props.onItemPress}>
<View 
style={styles.listItem}

>
  <Text>{props.input}</Text>
</View>
</TouchableWithoutFeedback>
);

const styles= StyleSheet.create({
  listItem:{
    width: "100%",
    padding: 10,
    backgroundColor:"#eee",
    marginBottom: 5,
  }
});
export default ListItem;