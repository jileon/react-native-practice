import React from 'react';
import { Button, StyleSheet } from 'react-native';

const Mybutton = (props) => <Button 
color="black" style={styles.button} 
onPress={props.onPressButton} 
title="Add" />;


const styles = StyleSheet.create({
	button: {
		width: '30%'
	}
});


export default Mybutton;