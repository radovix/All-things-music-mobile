import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ArtistsListScreen from './screens/Artists/ArtistsListScreen';
import ArtistDetailsScreen from './screens/Artists/ArtistDetailsScreen';
import AlbumsListScreen from './screens/Albums/AlbumsListScreen';
import AlbumDetailsScreen from './screens/Albums/AlbumDetailsScreen';
import SongsListScreen from './screens/Songs/SongsListScreen';

/**
 * Class repersents the highest order component - App component.
 * It wraps and returns the all navigators.
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  /**
   * Renders the app.
   *
   * @returns app elements
   * @memberof App
   */
  render() {
    const ArtistsStack = createStackNavigator({
      'ArtistsList': ArtistsListScreen,
      'ArtistDetails': ArtistDetailsScreen
    });

    const AlbumsStack = createStackNavigator({
      'AlbumsList': AlbumsListScreen,
      'AlbumDetails': AlbumDetailsScreen
    });

    const SongsStack = createStackNavigator({
      'SongsList': SongsListScreen,
      'SongAuthorDetails': ArtistDetailsScreen
    })

    const AppContainer = createAppContainer(
      createBottomTabNavigator({
        'ArtistsStack': ArtistsStack,
        'AlbumsStack': AlbumsStack,
        'SongsStack': SongsStack
      })
    );

    return (
      <AppContainer />
    );
  }
}

/**
 * App's styles object.
 */
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});*/

export default App;