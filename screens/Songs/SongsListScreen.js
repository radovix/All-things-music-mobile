import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import EmptyScreenPlaceholder from '../../components/Placeholders/EmptyScreenPlaceholder';
import SongsListItem from '../../components/FlatListItems/SongsListItem';

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
   * Called immediately after a component is mounted. 
   * Starts the data loading.
   *
   * @memberof SongsListScreen
   */
  componentDidMount() {
    this.songsListScreenModel.loadSongsList();
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
    const {
      isLoading,
      songsList 
    } = this.songsListScreenModel;

    if (isLoading) {
      return (
        <LoadingIndicator />
      )
    }

    return (
      <FlatList 
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        data={Array.from(songsList)}
        initialNumToRender={15}
        renderItem={song => (
          <SongsListItem 
            item={song} 
            onPress={() => {}} />
        )}
        keyExtractor={song => song.id.toString()}
        ListEmptyComponent={EmptyScreenPlaceholder} 
      />
    );
  }
}

/**
 * Screen's styles object.
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee'
  },
  contentContainerStyle: {
    flexGrow: 1
  }
});

export default SongsListScreen;

