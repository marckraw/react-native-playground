import React, {useContext} from 'react';
import {Button, StyleSheet} from 'react-native';
import Colors from '../theme/Colors';
import {OBSContext} from '../Contexts/OBSContext';

const ListItem = ({item, setCurrentScene}): React$Node => {
  const handlePress = async (sceneName) => {
    console.log(`Changing scene to: ${sceneName}`);
    setCurrentScene(sceneName);
  };

  return (
    <Button
      title={item.name}
      onPress={() => handlePress(item.name)}
      style={styles.item}
    />
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.orange,
    borderWidth: 2,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    borderColor: Colors.black,
  },
});
