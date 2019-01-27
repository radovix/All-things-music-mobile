import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Class represents the albums list screen.
 *
 * @class AlbumsListScreen
 * @extends {React.Component}
 */
class AlbumsListScreen extends React.Component {
  /**
   * Header configuration.
   *
   * @static
   * @memberof AlbumsListScreen
   */
  static navigationOptions = {
    header: null
  }
  
  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof AlbumsListScreen
   */
  render() {
    return (
      <View style={styles.container}>
        <Text>Albums list screen</Text>
        <Button 
          title='Album details'
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AlbumDetails')}
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

export default AlbumsListScreen;