import React from 'react';
import { Provider } from 'mobx-react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ScreenModelsFactory from './screen_models/ScreenModelsFactory';

import ArtistsListScreen from './screens/Artists/ArtistsListScreen';
import ArtistDetailsScreen from './screens/Artists/ArtistDetailsScreen';
import AlbumsListScreen from './screens/Albums/AlbumsListScreen';
import AlbumDetailsScreen from './screens/Albums/AlbumDetailsScreen';
import SongsListScreen from './screens/Songs/SongsListScreen';

import colors from './constants/colors';

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
      'ArtistDetails': ArtistDetailsScreen,
      'ArtistsAlbumDetails': AlbumDetailsScreen
    });

    const AlbumsStack = createStackNavigator({
      'AlbumsList': AlbumsListScreen,
      'AlbumDetails': AlbumDetailsScreen
    });

    const SongsStack = createStackNavigator({
      'SongsList': SongsListScreen
    })

    const AppContainer = createAppContainer(
      createBottomTabNavigator(
        {
          'ArtistsStack': {
            screen: ArtistsStack,
            navigationOptions: {
              title: 'Artists',
              tabBarIcon: ({ tintColor }) => <Icon name="artist" size={30} color={tintColor}/>
            }
          },
          'AlbumsStack': {
            screen: AlbumsStack,
            navigationOptions: {
              title: 'Albums',
              tabBarIcon: ({ tintColor }) => <Icon name="album" size={30} color={tintColor}/>
            }
          },
          'SongsStack': {
            screen: SongsStack,
            navigationOptions: {
              title: 'Songs',
              tabBarIcon: ({ tintColor }) => <Icon name="music" size={30} color={tintColor}/>
            }
          }
        }, 
        { 
          tabBarOptions: { 
            activeTintColor: colors.activeTabTintColor, 
            inactiveTintColor : colors.inactiveTabTintColor, 
            showLabel: false, 
            style: {
              backgroundColor: colors.mainColor 
            }
          }
        }
      )
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