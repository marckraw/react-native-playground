/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import Header from './src/components/Header';
import Colors from './src/theme/Colors';
import ScenesList from './src/components/ScenesList';
import {OBSContext} from './src/Contexts/OBSContext';

const App: () => React$Node = () => {
  const [websocketAddress, setWebsocketAddress] = useState(
    '192.168.31.189:4444',
  );
  const obsContextData = useContext(OBSContext);

  const handleTextChange = (text) => {
    setWebsocketAddress(text);
  };

  const loginToWebsocket = () => {
    console.log('login to websocket....');
    obsContextData.connect(websocketAddress);
  };

  const logoutFromWebsocket = () => {
    console.log('logout from websocket...');
    obsContextData.disconnect();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.heading1}>Stream Mobile Helper</Text>
              <Text style={styles.sectionDescription}>
                This is Smarthphone stream mobile helper, for managing scenes,
                checking stats, and so on.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text>{websocketAddress}</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                }}
                placeholder="Insert websocketAddress here!"
                onChangeText={handleTextChange}
                value={websocketAddress}
              />
              {obsContextData.obs ? (
                <Button
                  title={'Logout to websocket'}
                  onPress={() => logoutFromWebsocket()}
                />
              ) : (
                <Button
                  title={'Login to websocket'}
                  onPress={() => loginToWebsocket()}
                />
              )}
            </View>
            <ScenesList setCurrentScene={obsContextData.setCurrentScene}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  heading1: {
    fontSize: 32,
    fontWeight: '300',
    color: Colors.orange,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default App;
