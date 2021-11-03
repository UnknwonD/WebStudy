import { signOut } from "@firebase/auth";
import React from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import { authService } from "../../fbase";

const user = authService.currentUser;

function Home() {
    return (
    <ScrollView>
      <View style={styles.upperCtn}>
        {user ? (
            <Text>{user.displayName}님 안녕하세요</Text>
        ) : (
            <Text>안녕하세요!</Text>
        )}
        <Button title="SignOut" onPress={() => {signOut(authService)}}/>
      </View>

      <View style={styles.middleCtn}>
        <Text>Main Block</Text>
        <Button title="Console" onPress={() => {console.log(authService);}} />
      </View>
    </ScrollView>
    );
  };

  export default Home;

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
});