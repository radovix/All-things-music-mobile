import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Class represents the album details screen.
 *
 * @class AlbumDetailsScreen
 * @extends {React.Component}
 */
@inject('screenModels')
@observer
class AlbumDetailsScreen extends React.Component {
  /**
   * Creates an instance of AlbumDetailsScreen.
   *
   * @param {Object} props Props
   * @memberof AlbumDetailsScreen
   */
  constructor(props) {
    super();

    this.albumDetailsScreenModel = props.screenModels.albumDetailsScreenModel;
  }

  /**
   * Album details screen model.
   */
  albumDetailsScreenModel;

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
