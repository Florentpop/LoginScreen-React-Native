import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
              <View style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Log in</Text> 
              </View> 

              <View>
                  <TextInput 
                  style={styles.input} 
                  placeholderTextColor="#aaaaaa" 
                  placeholder="Username"/>

                  <TextInput 
                  style={styles.input} 
                  placeholderTextColor="#aaaaaa" 
                  secureTextEntry={true}
                  placeholder="Password"/>
                  <Text style={styles.forgotPassword}>Forgot password</Text>
              </View>

              <View>
                  <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Log in</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.noAccountContainer}>
                  <Text style={styles.noAccountText}>Dont have an account?</Text>
                  <Text style={styles.signupText}>Sign up</Text>
              </View>
            </ScrollView>
        ) 
    }
}

const styles = StyleSheet.create({
  container:{
      marginHorizontal:50
  },

  loginText:{
      fontSize:50,
      color:"#5100ad"
  },

  loginTextContainer:{
      marginBottom:30
  },
  input:{
      borderBottomWidth:2,
      borderBottomColor:"#5100ad",
      fontSize:20,
      height:50,
      marginTop:25 
  },

  forgotPassword:{
      alignSelf:"flex-end",
      marginVertical:3,
      color:"#0853a8"
  },
  buttonContainer:{
      height:50,
      backgroundColor:"#5100ad",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      marginVertical:70
      
  },
  buttonText:{
      color:"white",
      fontSize:25,
  },
  noAccountContainer:{
      flexDirection:"row",
      justifyContent:"center",
  },
  noAccountText:{
      marginRight:10,
      fontSize:16
  },

  signupText:{
      fontSize:16,
      color:"#5100ad",
  }
})
