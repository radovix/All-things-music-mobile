import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { pure } from 'recompose';

/**
 * Loading indicator component.
 * 
 * @returns component's elements
 */
const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator color='#B7521E' size={30} />
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
  }
});

export default pure(LoadingIndicator);
