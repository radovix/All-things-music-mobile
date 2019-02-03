import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Class represents the songs list screen.
 *
 * @class SongsListScreen
 * @extends {React.Component}
 */
@inject('screenModels')
@observer
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
   * Creates an instance of SongsListScreen.
   *
   * @param {object} props Props
   * @memberof SongsListScreen
   */
  constructor(props) {
    super();

    this.songsListScreenModel = props.screenModels.songsListScreenModel;
  }

  /**
   * Songs list screen model.
   */
  songsListScreenModel;

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

