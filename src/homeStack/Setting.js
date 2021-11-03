import { updateProfile } from "@firebase/auth";
import React, {useState} from "react";
import { Button, Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { authService } from "../../fbase";



export default function Setting() {

    const [nickname, setNickname] = useState("");

    const onPressSaveName = () => {
        updateProfile(authService.currentUser, {
            displayName: nickname
        }).then( () =>{
            console.log(authService.currentUser.displayName);
        }).catch((error) => {
            console.log(error);
        })
    };
    
    return (
        <ScrollView>
            <View style={styles.upperCtn} >
                <Text>이름 변경</Text>
                <TextInput 
                    style={styles.lgnbox} 
                    keyboardType='default' 
                    placeholder="NickName"
                    value={nickname}
                    onChangeText={(nickname) => {
                        setNickname(nickname);
                        console.log({nickname});
                    }}
                />
                <Button title="저장" onPress={onPressSaveName} />
            </View>
            <View style={styles.middleCtn}>

            </View>
        </ScrollView>
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
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#C8E367',
    },
    lgnbtn: {
        alignItems:"center",
        backgroundColor: '#FEC28E',
        marginTop:30,
        padding:15,
        borderWidth:1,
      },  
});