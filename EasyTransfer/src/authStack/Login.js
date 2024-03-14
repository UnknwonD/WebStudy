import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { authService } from "../../fbase";
import { signInWithEmailAndPassword } from "@firebase/auth";



export default function Login({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onPressLgn = async (event) => {
      event.preventDefault();
      try {
        let data;
        data = await signInWithEmailAndPassword(authService, email, password);
      } catch(error) {
        console.warn(error);
      }
    };

    
      return (
        <>
            <View style={{
              flex: 0.5, 
              marginTop: 10, 
              backgroundColor:'blue',
              }}>
              <Text style = {{fontSize:30}}>ㄱㅍ:ㅇ</Text>
            </View>
  
              <View style={styles.middleCtn}>
                <TextInput
                  style={styles.input}
                  onChangeText={email => {setEmail(email); console.log({email})}}
                  value={email}
                  keyboardType="email-address"
                  placeholder='Email'
                  returnKeyType='done'
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={password => {setPassword(password); console.log({password})}}
                  value={password}
                  secureTextEntry={true}
                  placeholder='Password'
                  returnKeyType='done'
                />
                <TouchableOpacity style={styles.lgnbtn} onPress={onPressLgn} >
                  <Text backgroundColor="#FEC28E">로그인</Text>
                </TouchableOpacity>
              </View>
  
              <View style={styles.downCtn} >
                <Button title="회원가입" onPress={() => navigation.navigate("Signup")}/>
              </View>
        </>
  
      );
  };

  const styles = StyleSheet.create({
    upperCtn: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    middleCtn: {
        flex: 1,
        backgroundColor: 'grey',   
        alignItems: 'center',
        justifyContent: 'center',
      },
    downCtn: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
      width: 230,
      height:30,
      margin: 10,
      fontSize: 10,
      borderBottomWidth:2,
      borderBottomColor:'#EE8F3B',
    },
    lgnbtn: {
      alignItems:"center",
      backgroundColor: '#FEC28E',
      marginTop:30,
      padding:15,
      borderWidth:1,
    },  
  });