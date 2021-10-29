import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { authService } from "../../fbase";
import { signOut } from "@firebase/auth";

function Home() {
    return (
      <View>
        <Text>home</Text>
        <Button title='Sign Out' onPress={() => signOut(authService)} />
      </View>
    );
  };

  export default Home;