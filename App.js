import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';

//const isAndroid = Platform.OS === "android";
//console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>

        <View style={{ padding: 16, backgroundColor: "yellow" }}>
          <Text>Search</Text>
        </View>

        <View style={{ flex: 1, padding: 16, backgroundColor: "red" }}>
          <Text>List</Text>
        </View>

      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
