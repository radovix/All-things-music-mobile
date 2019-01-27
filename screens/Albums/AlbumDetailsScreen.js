import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Class represents the album details screen.
 *
 * @class AlbumDetailsScreen
 * @extends {React.Component}
 */
class AlbumDetailsScreen extends React.Component {
  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof AlbumDetailsScreen
   */
  render() {
    return (
      <View style={styles.container}>
        <Text>Album details screen</Text>
      </View>
    )
  }
}

/**
 * Screen's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AlbumDetailsScreen;
