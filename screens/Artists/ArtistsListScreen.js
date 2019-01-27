import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Class represents the articles list screen.
 *
 * @class ArtistsListScreen
 * @extends {React.Component}
 */
class ArtistsListScreen extends React.Component {
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
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof ArtistsListScreen
   */
  render() {
    return (
      <View style={styles.container}>
        <Text>Arists list screen</Text>
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
  },
  button: {
    width: 100,
    marginTop: 50
  }
});


export default ArtistsListScreen;