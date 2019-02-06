import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList, View, TextInput, Text } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import EmptyScreenPlaceholder from '../../components/Placeholders/EmptyScreenPlaceholder';
import Filter from '../../containers/Filters/Filter';
import RangeSlider from '../../components/RangeSliders/GradesRangeSlider';
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
      songsList,
      filterSongName,
      filterArtistName,
      filterGradesRange,
      onFilterTextInputChange,
      onFilterGradesRangeChange,
      resetFilter,
      loadSongsList 
    } = this.songsListScreenModel;

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <View style={styles.container}>
        <Filter 
          topElementPlaceholder='Song name...' 
          topElementValue={filterSongName}
          topElementOnChange={value => onFilterTextInputChange('filterSongName', value)}
          onClear={resetFilter}
          onApply={loadSongsList}
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

export default SongsListScreen;

