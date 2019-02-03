import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { pure } from 'recompose';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Empty screen placeholder component.
 * 
 * @returns component's elements
 */
const EmptyScreenPlaceholder = () => (
  <View style={styles.container}>
    <Icon name='emoticon-sad' size={100} />
    <Text style={styles.message}>Nothing to show yet.</Text>
  </View>
);

/**
 * Component's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    marginTop: 15,
    fontSize: 15
  }
});

export default pure(EmptyScreenPlaceholder);