/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Header from './src/components/Header';
import Colors from './src/theme/Colors';

const login = () => {
  const dupa = [
    {
      id: 1,
      name: 'Marcin',
    },
    {
      id: 2,
      name: 'Marian',
    },
  ];

  console.log('do something ?');
  console.log(dupa);
};

const App: () => React$Node = () => {
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
              <TouchableOpacity
                accessibilityRole={'button'}
                onPress={() => login()}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
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
