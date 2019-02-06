import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList, View } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import EmptyScreenPlaceholder from '../../components/Placeholders/EmptyScreenPlaceholder';
import Filter from '../../containers/Filters/Filter';
import ArtistsListItem from '../../components/FlatListItems/ArtistsListItem';

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
   * Handles the on press event for one list item.
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
      artistsList,
      filterArtistName,
      onFilterTextInputChange,
      loadArtistsList
    } = this.artistsListScreenModel

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <View>
        <Filter 
          topElementPlaceholder='Artist name...' 
          topElementValue={filterArtistName}
          topElementOnChange={value => onFilterTextInputChange('filterArtistName', value)}
          onApply={loadArtistsList} />
        <FlatList 
          style={styles.list}
          contentContainerStyle={styles.contentContainerStyle}
          data={Array.from(artistsList)}
          initialNumToRender={6}
          renderItem={artist => (
            <ArtistsListItem 
              item={artist} 
              onPress={() => this.onItemPress(artist)} />
          )}
          keyExtractor={artist => artist.id.toString()}
          ListEmptyComponent={EmptyScreenPlaceholder}  
        />
      </View>
    );
  }
}

/**
 * Screen's styles object.
 */
const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eeeeee',
    marginBottom: 50
  },
  contentContainerStyle: {
    flexGrow: 1
  }
});

export default ArtistsListScreen;