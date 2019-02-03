import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';
import { pure } from 'recompose';

/**
 * Artist's album list item component.
 * 
 * @param {object} item One list item 
 * @param {function} onPress Function called when item is pressed
 * @returns component's elements
 */
const ArtistsAlbumsListItem = ({ item: { item }, onPress }) => (
  <TouchableOpacity
    key={item.id}
    style={styles.container}
    activeOpacity={0.6}
    onPress={onPress}
  >
    <Image 
      style={styles.image} 
      source={{ uri: item.albumCover }} 
      resizeMode='contain' />
    <View style={styles.nameWrapper}>
      <Text stye={styles.name}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

/**
 * Component's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
    margin: 2.5,
  },
  image: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 10
  },
  nameWrapper: {
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    margin: 'auto'
  }
});

export default pure(ArtistsAlbumsListItem);