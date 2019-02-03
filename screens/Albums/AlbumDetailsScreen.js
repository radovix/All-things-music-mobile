import React from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoadingIndicator from '../../components/Loading/LoadingIndicator';
import AlbumsSongsListItem from '../../components/ListItems/AlbumsSongsListItem';
import AlbumsCommentsListItem from '../../components/ListItems/AlbumsCommentsListItem';

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
   * Creates an instance of AlbumDetailsScreen.
   *
   * @param {object} props Props
   * @memberof AlbumDetailsScreen
   */
  constructor(props) {
    super();

    this.albumDetailsScreenModel = props.screenModels.albumDetailsScreenModel;
  }

  /**
   * Called immediately after a component is mounted. 
   * Starts the data loading.
   *
   * @memberof AlbumDetailsScreen
   */
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    this.albumDetailsScreenModel.loadAlbumDetails(id);
  }

  /**
   * Album details screen model.
   */
  albumDetailsScreenModel;

  /**
   * Renders the songs list.
   *
   * @returns songs list 
   * @memberof AlbumDetailsScreen
   */
  renderSongs() {
    const { albumDetails } = this.albumDetailsScreenModel;

    return albumDetails.songs.map(song => (
      <AlbumsSongsListItem key={song.id} item={song} />
    ));
  }

  /**
   * Renders the comments list.
   *
   * @returns comments list
   * @memberof AlbumDetailsScreen
   */
  renderComments() {
    const { albumDetails } = this.albumDetailsScreenModel;

    console.log(albumDetails.userReviews);

    return albumDetails.userReviews.map(userReview => (
      <AlbumsCommentsListItem key={userReview.id} item={userReview} />
    ));
  }

  /**
   * Renders the screen.
   *
   * @returns screen elements
   * @memberof AlbumDetailsScreen
   */
  render() {
    const {
      isLoading,
      albumDetails
    } = this.albumDetailsScreenModel;

    if (isLoading) {
      return (
        <LoadingIndicator />
      );
    }

    const {
      albumCover,
      artist,
      grade,
      name,
      releaseDate
    } = albumDetails;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image 
            style={styles.image}
            source={{ uri: albumCover }}
            resizeMode='contain' />
          <View style={styles.info}>    
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>
              {artist.name}, {releaseDate ? moment(releaseDate).year() + '.' : '-'}
            </Text>
            <Text style={styles.grade}>
              {`${grade.toFixed(1)} / 5 `}    
              <Icon name='star' size={15} color='yellow' />
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <Text style={styles.label}>Songs</Text>
            {this.renderSongs()}
          </View>
          <View style={styles.comments}>
            <Text style={styles.label}>Comments</Text>
            {this.renderComments()}
          </View>
        </View>
      </ScrollView>
    );
  }
}

/**
 * Screen's styles object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  text: {
    marginTop: 5
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
  comments: {
    marginTop: 15,
    marginBottom: 15
  }
});

export default AlbumDetailsScreen;
