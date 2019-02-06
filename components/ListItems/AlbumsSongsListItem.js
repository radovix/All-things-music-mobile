import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { pure } from 'recompose';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Album's songs list item component.
 * 
 * @param {object} item One list item
 * @param {function} onPress Function called when item is pressed
 * @returns component's elements 
 */
const AlbumsSongsListItem = ({ item, onPress = () => {} }) => (
  <TouchableOpacity 
    key={item.id}
    style={styles.container}
    activeOpacity={0.6}
    onPress={onPress}
  >
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.grade}>
        {`${item.grade.toFixed(1)} / 5.0 `}    
        <Icon name='star' size={15} color='yellow' />
    </Text>
  </TouchableOpacity>
);

/**
 * Comopnent's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    margin: 5,
    marginTop: 3.5,
    marginBottom: 3.5,
    backgroundColor: 'white'
  },
  name: {
    fontSize: 15,
    textAlign: 'center'
  },
  grade: {
    fontSize: 15,
    textAlign: 'center'
  }
});

export default pure(AlbumsSongsListItem);