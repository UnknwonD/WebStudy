import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { authService } from "../../fbase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPsw, setConfirmPsw] = useState("");
    const [error, setError] = useState("");
    const [nickname, setNickname] = useState("");
    const user = authService.currentUser;

    useEffect(() => {
        if (email==="") {
            setError("Email cannot be empty");
        } else if(password.length < 6) {
            setError("password should be more than 6 characters");
        } else if (password !== confirmPsw) {
            setError("Incorrect with password !");
        }  else {
            setError("");
        }
    }, [email, password, confirmPsw, error])

    const onPressSgu = async (event) => {
        event.preventDefault();
        if(error !== ""){
            Alert.alert(error);
        } else {
            try {
             let data = await createUserWithEmailAndPassword(authService, email, password).then(() => {
               
                updateProfile(authService.currentUser, {
                    displayName: nickname
                }).then( () =>{
                    console.log(authService.currentUser.displayName);
                }).catch((error) => {
                    console.log(error);
                })
            }).catch((error) => {
                console.log(error);
            });
            
            Alert.alert("Successfully Sign up !");
            }catch (error) {
                console.log(error);
            }
        }
    };


    return(
        <View style={{flex:1}}>
            <View style={styles.upperCtn}>
                <Text style={{fontSize:30}}>회원가입 정보</Text>
            </View>

            <View style={styles.middleCtn}>
                <TextInput 
                    style={styles.lgnbox} 
                    keyboardType='email-address' 
                    placeholder="Email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput 
                    style={styles.lgnbox} 
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={password} 
                    onChangeText={(password) => setPassword(password)}
                    />
                <TextInput 
                    style={styles.lgnbox} 
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPsw}
                    onChangeText={(confirmPsw) => setConfirmPsw(confirmPsw)}
                    />
                <TextInput 
                    style={styles.lgnbox} 
                    placeholder="Nickname"
                    value={nickname}
                    onChangeText={(nickname) => setNickname(nickname)}
                    />
            </View>

            <View style={styles.downCtn}>
                <TouchableOpacity onPress={onPressSgu}>
                    <Text>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ 
    upperCtn: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#67E372',
    },
    middleCtn: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#C8E367',
    },
    downCtn: {
        flex:2,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#67BAE3'
    },
    lgnbox: {
        width: 230,
        height:30,
        margin: 10,        
        backgroundColor: 'grey',   
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:1,
      }, 
});