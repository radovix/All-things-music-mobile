import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Class represents the artist details screen.
 *
 * @class ArtistDetailsScreen
 * @extends {React.Component}
 */
@inject('screenModels')
@observer
class ArtistDetailsScreen extends React.Component {
  /**
   * Creates an instance of ArtistDetailsScreen.
   *
   * @param {Object} props Props
   * @memberof ArtistDetailsScreen
   */
  constructor(props) {
    super();

    this.artistDetailsScreenModel = props.screenModels.artistDetailsScreenModel;
  }

  /**
   * Artist details screen model.
   */
  artistDetailsScreenModel;

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