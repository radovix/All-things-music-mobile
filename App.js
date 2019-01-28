import React from 'react';
import { Provider } from 'mobx-react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import ScreenModelsFactory from './screen_models/ScreenModelsFactory';

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
   * Called immediately after a component is mounted. 
   * Setting state here will trigger re-rendering.
   *
   * @memberof App
   */
  componentDidMount() {
    StatusBar.setBackgroundColor('white');
  }

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

    const screenModels = ScreenModelsFactory.getScreenModels();

    return (
      <Provider screenModels={screenModels}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;