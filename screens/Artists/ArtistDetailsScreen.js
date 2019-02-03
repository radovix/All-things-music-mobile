import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import ArtistsAlbumsListItem from '../../components/FlatListItems/ArtistsAlbumsListItem';

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
   * Header configuration
   *
   * @static
   * @memberof ArtistDetailsScreen
   */
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerTitleStyle: {
      fontWeight: 'normal'
    }
  });

  /**
   * Creates an instance of ArtistDetailsScreen.
   *
   * @param {object} props Props
   * @memberof ArtistDetailsScreen
   */
  constructor(props) {
    super();

    this.artistDetailsScreenModel = props.screenModels.artistDetailsScreenModel;
  }

  /**
   * Called immediately after a component is mounted. 
   * Starts the data loading.
   *
   * @memberof ArtistDetailsScreen
   */
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    this.artistDetailsScreenModel.loadArtistDetails(id);
  }

  /**
   * Artist details screen model.
   */
  artistDetailsScreenModel;

  /**
   * Handles the on press event for one albums list
   * item.
   *
   * @param {object} event Event object containing pressed item
   * @memberof ArtistDetailsScreen
   */
  onAlbumsItemPress(event) {
    const { navigation } = this.props;  
    const { item } = event;

    navigation.navigate('AlbumDetails', {
      id: item.id,
      title: item.name
    })
  }

  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof ArtistDetailsScreen
   */
  render() {
    const {
      isLoading,
      artistDetails
    } = this.artistDetailsScreenModel;

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    const {
      name,
      summary,
      genres,
      image,
      albums
    } = artistDetails;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            style={styles.image}
            source={{ uri: image }}
            resizeMode='contain' />
          <View style={styles.info}>    
            <Text style={styles.name} numberOfLines={2}>{name}</Text>
            <Text style={styles.genres}>{genres.join(', ')}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.label}>About {name}</Text>
          <Text style={styles.biography}>{summary}</Text>
          <Text style={styles.label}>Albums</Text>
          <FlatList 
            style={styles.albums}
            horizontal={true}
            data={Array.from(albums)} 
            initialNumToRender={4}
            renderItem={album => (
              <ArtistsAlbumsListItem 
                item={album} 
                onPress={() => this.onAlbumsItemPress(album)} />              
            )}
            keyExtractor={album => album.id.toString()}
            />
        </View>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    height: 150,
    margin: 5,
    marginTop: 3.5,
    marginBottom: 3.5,
    backgroundColor: 'white'
  },
  image: {
    flex: 5,
    margin: 5,
    borderRadius: 10
  },
  info: {
    flex: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    borderColor: '#B7521E',
    borderBottomWidth: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  genres: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center'
  },
  body: {
    flex: 1,
    margin: 10
  },
  label: {
    marginBottom: 10,
    paddingBottom: 5,
    borderColor: '#B7521E',
    borderBottomWidth: 1,
    fontSize: 18,
  },  
  biography: {
    fontSize: 16,
    marginBottom: 15
  },
  albums: {
    flex: 1
  }
});

export default ArtistDetailsScreen;