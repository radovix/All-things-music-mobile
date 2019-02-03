import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import EmptyScreenPlaceholder from '../../components/Placeholders/EmptyScreenPlaceholder';
import ArtistListItem from '../../components/FlatListItems/ArtistsListItem';

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
   * @param {object} props Props
   * @memberof ArtistsListScreen
   */
  constructor(props) {
    super();

    this.artistsListScreenModel = props.screenModels.artistsListScreenModel;
  }

  /**
   * Called immediately after a component is mounted. 
   * Starts the data loading.
   *
   * @memberof ArtistsListScreen
   */
  componentDidMount() {
    this.artistsListScreenModel.loadArtistsList();
  }

  /**
   * Artists list screen model.
  */
  artistsListScreenModel;

  /**
   * Handles the on press event for one item list.
   *
   * @param {object} event Event object containing pressed item
   * @memberof ArtistsListScreen
   */
  onItemPress(event) {
    const { navigation } = this.props;
    const { item } = event;

    navigation.navigate('ArtistDetails', { 
      id: item.id,
      title: item.name 
    });
  }

  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof ArtistsListScreen
   */
  render() {
    const {
      isLoading,
      artistsList
    } = this.artistsListScreenModel

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <FlatList 
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        data={Array.from(artistsList)}
        initialNumToRender={6}
        renderItem={artist => (
          <ArtistListItem 
            item={artist} 
            onPress={() => this.onItemPress(artist)} />
        )}
        keyExtractor={artist => artist.id.toString()}
        ListEmptyComponent={EmptyScreenPlaceholder}  
      />
    )
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

export default ArtistsListScreen;