import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { pure } from 'recompose';

/**
 * Album's comment list item component.
 * 
 * @param {object} item One list item
 * @param {function} onPress Function called when item is pressed
 * @returns component's elements 
 */
const AlbumsCommentListItem = ({ item }) => (
  <View key={item.id} style={styles.container}>
    <Text style={styles.user}>{item.userName}</Text>
    <Text style={styles.content}>{item.content}</Text>
  </View>
);

/**
 * Comopnent's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 40,
    margin: 5,
    marginTop: 3.5,
    marginBottom: 3.5,
    backgroundColor: 'white'
  },
  user: {
    paddingBottom: 2,
    fontSize: 13
  },
  content: {
    marginBottom: 6,
    fontSize: 15
  }
});

export default pure(AlbumsCommentListItem);