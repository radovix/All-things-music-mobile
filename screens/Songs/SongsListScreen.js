import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Class represents the songs list screen.
 *
 * @class SongsListScreen
 * @extends {React.Component}
 */
class SongsListScreen extends React.Component {
  /**
   * Header configuration.
   *
   * @static
   * @memberof ArtistsListScreen
   */
  static navigationOptions = {
    header: null
  }

  /**
   * Renders the component.
   *
   * @returns screen elements
   * @memberof SongsListScreen
   */
  render() {
    return (
      <View style={styles.container}>
        <Text>Songs list screen</Text>
        <Button
          title='Artist details'
          style={styles.button}
          onPress={() => this.props.navigation.navigate('ArtistDetails')}
        />
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

export default SongsListScreen;

