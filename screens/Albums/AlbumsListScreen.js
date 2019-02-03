import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import EmptyScreenPlaceholder from '../../components/Placeholders/EmptyScreenPlaceholder';
import AlbumsListItem from '../../components/FlatListItems/AlbumsListItem';

/**
 * Class represents the albums list screen.
 *
 * @class AlbumsListScreen
 * @extends {React.Component}
 */
@inject('screenModels')
@observer
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
   * Creates an instance of AlbumsListScreen.
   *
   * @param {object} props Props
   * @memberof AlbumsListScreen
   */
  constructor(props) {
    super();

    this.albumsListScreenModel = props.screenModels.albumsListScreenModel;
  }

  /**
   * Called immediately after a component is mounted. 
   * Starts the data loading.
   *
   * @memberof AlbumsListScreen
   */
  componentDidMount() {
    this.albumsListScreenModel.loadAlbumsList();
  }

  /**
   * Albums list screen model.
   */
  albumsListScreenModel;

  /**
   * Handles the on press event for one list item.
   *
   * @param {object} event Event object containing pressed item
   * @memberof AlbumsListScreen
   */
  onItemPress(event) {
    const { navigation } = this.props;
    const { item } = event;

    navigation.navigate('AlbumDetails', {
      id: item.id,
      title: item.name
    });
  }

  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof AlbumsListScreen
   */
  render() {
    const {
      isLoading,
      albumsList
    } = this.albumsListScreenModel;

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <FlatList 
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        data={Array.from(albumsList)}
        initialNumToRender={6}
        renderItem={album => (
          <AlbumsListItem 
            item={album} 
            onPress={() => this.onItemPress(album)} />
        )}
        keyExtractor={album => album.id.toString()}
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

export default AlbumsListScreen;