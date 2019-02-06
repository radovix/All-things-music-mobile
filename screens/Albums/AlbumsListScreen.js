import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList, View, TextInput, Text } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import EmptyScreenPlaceholder from '../../components/Placeholders/EmptyScreenPlaceholder';
import Filter from '../../containers/Filters/Filter';
import RangeSlider from '../../components/RangeSliders/GradesRangeSlider';
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
      albumsList,
      filterAlbumName,
      filterArtistName,
      filterGradesRange,
      onFilterTextInputChange,
      onFilterGradesRangeChange,
      resetFilter,
      loadAlbumsList
    } = this.albumsListScreenModel;

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <View style={styles.container}>
        <Filter 
          topElementPlaceholder='Album name...' 
          topElementValue={filterAlbumName}
          topElementOnChange={value => onFilterTextInputChange('filterAlbumName', value)}
          onClear={resetFilter}
          onApply={loadAlbumsList}
        >
          <View>
            <Text style={styles.filterFieldLabel}>Artist</Text> 
            <TextInput 
              style={styles.filterField}
              placeholder='Artist name...'
              maxLength={40}
              value={filterArtistName}
              onChangeText={value => onFilterTextInputChange('filterArtistName', value)}
            />
          </View>
          <View> 
            <Text style={styles.filterFieldLabel}>Grade</Text>
            <RangeSlider 
              gradesRange={filterGradesRange}
              onGradesRangeChange={onFilterGradesRangeChange}
            />
          </View>
        </Filter>
        <FlatList 
          style={styles.list}
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
      </View> 
    );
  }
}

/**
 * Screen's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    backgroundColor: '#eeeeee'
  },
  contentContainerStyle: {
    flexGrow: 1
  },
  filterField: {
    fontSize: 16
  },
  filterFieldLabel: {
    paddingLeft: 5,
    fontSize: 13
  }
});

export default AlbumsListScreen;