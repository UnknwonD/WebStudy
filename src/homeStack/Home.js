import { signOut } from "@firebase/auth";
import React from "react";
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authService } from "../../fbase";
import { Summation_Chart } from "../components/Visualization";

const user = authService.currentUser;

function Home({navigation}) {
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.upperCtn}>
            {user ? (
                <Text>{user.displayName}님 안녕하세요</Text>
            ) : (
                <Text>안녕하세요!</Text>
            )}
            <Button title="SignOut" onPress={() => {signOut(authService)}}/>
          </View>

          <View style={styles.middleCtn}>
            <View style={{flex:1,}}>
              <TouchableOpacity onPress={() => {navigation.navigate("Chart")}}>
                <Summation_Chart />
              </TouchableOpacity>
            </View>
            <View>
            <Button title="Console" onPress={() => {console.log(authService);}} />
            </View>
          </View>
          </SafeAreaView>
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