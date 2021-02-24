/**
 * @flow strict-local
 * @format
 */

'use strict';
import type {Node} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import ListItem from './ListItem';

const scenesList = [
  {
    id: 0,
    name: 'Main Scene',
  },
  {
    id: 1,
    name: 'Second Scene',
  },
  {
    id: 2,
    name: 'Third Scene',
  },
];

const ScenesList = ({setCurrentScene}): Node => (
  <View>
    <Text style={styles.text}>Scenes List</Text>
    <FlatList data={scenesList} renderItem={({item}) => <ListItem setCurrentScene={setCurrentScene} item={item} />} />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default ScenesList;
