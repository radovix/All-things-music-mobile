import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

/**
 * Class represents the articles list screen.
 *
 * @class ArtistsListScreen
 * @extends {React.Component}
 */
@inject('screenModels')
@observer
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
   * Creates an instance of ArtistsListScreen.
   *
   * @param {Object} props Props
   * @memberof ArtistsListScreen
   */
  constructor(props) {
    super();

    this.artistsListScreenModel = props.screenModels.artistsListScreenModel;
  }

  /**
   * Artists list screen model.
   */
  artistsListScreenModel;

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