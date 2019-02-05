import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, FlatList, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View>
        <View style={styles.filter}>
          <TextInput 
            placeholder='Song name...'
            maxLength={30}
            onChangeText={e => console.log(e)}
          />
          <Icon name='arrow-down-drop-circle-outline' size={15} />
        </View> 
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
  filter: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3333, 
    borderBottomColor: 'rgba(0, 0, 0, .3)'
  },
  list: {
    backgroundColor: '#eeeeee'
  },
  contentContainerStyle: {
    flexGrow: 1
  }
});

export default SongsListScreen;

