import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { pure } from 'recompose';

/**
 * Artists list item component.
 * 
 * @param {object} item One list item 
 * @param {function} onPress Function called when item is pressed
 * @returns component's elements
 */
const ArtistListItem = ({ item: { item }, onPress }) => (
  <TouchableOpacity
    key={item.id}
    style={styles.container}
    activeOpacity={0.6}
    onPress={onPress}
  >
    <Image 
      style={styles.image}
      source={{ uri: item.image }}
      resizeMode='contain' />
    <View style={styles.info}>    
      <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.genres}>{item.genres.join(', ')}</Text>
    </View>
  </TouchableOpacity>
);

/**
 * Component's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    margin: 5,
    marginTop: 3.5,
    marginBottom: 3.5,
    backgroundColor: 'white'
  },
  image: {
    flex: 4,
    margin: 5,
    borderRadius: 10
  },
  info: {
    flex: 6,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    borderColor: '#B7521E',
    borderBottomWidth: 1,
    fontSize: 18,
    textAlign: 'center'
  },
  genres: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center'
  }
});

export default pure(ArtistListItem);