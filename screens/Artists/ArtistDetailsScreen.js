import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Class represents the artist details screen.
 *
 * @class ArtistDetailsScreen
 * @extends {React.Component}
 */
class ArtistDetailsScreen extends React.Component {
  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof ArtistDetailsScreen
   */
  render() {
    return (
      <View style={styles.container}>
        <Text>Artist details screen</Text>
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

export default ArtistDetailsScreen;