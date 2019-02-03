import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { pure } from 'recompose';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SongsListItem = ({ item: { item }, onPress = () => {} }) => (
  <TouchableOpacity 
    key={item.id}
    style={styles.container}
    activeOpacity={0.6}
    onPress={onPress}
  >
    <Text style={styles.text}>
      {item.artistName} - {item.name}
    </Text>
    <Text style={styles.grade}>
      {`${item.grade.toFixed(1)} / 5 `}    
      <Icon name='star' size={15} color='yellow' />
    </Text>
  </TouchableOpacity>
);

/**
 * Component's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    margin: 5,
    marginTop: 3.5,
    marginBottom: 3.5,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 15,
    textAlign: 'center'
  },
  grade: {
    fontSize: 15,
    textAlign: 'center'
  }
});

export default pure(SongsListItem);