import ArtistsListScreenModel from './Artists/ArtistsListScreenModel';
import ArtistDetailsScreenModel from './Artists/ArtistDetailsScreenModel';
import AlbumsListScreenModel from './Albums/AlbumsListScreenModel';
import AlbumDetailsScreenModel from './Albums/AlbumDetailsScreenModel';
import SongsListScreenModel from './Songs/SongsListScreenModel';

/**
 * Class represents the screen models factory.
 * It's purpose is initializing the screen models 
 * object and providing it to the other components.
 *
 * @class ScreenModelsFactory
 */
class ScreenModelsFactory {
  /**
   * Screen models.
   */
  static _screenModels;

  /**
   * Initializes the screen models object with screen
   * model of each screen.
   * 
   * @static
   * @memberof ScreenModelsFactory
   */
  static _initScreenModels() {
    this._screenModels = {
      artistsListScreenModel: new ArtistsListScreenModel(),
      artistDetailsScreenModel: new ArtistDetailsScreenModel(),
      albumsListScreenModel: new AlbumsListScreenModel(),
      albumDetailsScreenModel: new AlbumDetailsScreenModel(),
      songsListScreenModel: new SongsListScreenModel()
    }
  }

  /**
   * Returns the screen models object.
   * 
   * Initializes the screen models object if it hasn't been
   * initialized before.
   *
   * @static
   * @returns screen models object
   * @memberof ScreenModelsFactory
   */
  static getScreenModels() {
    if (!this._screenModels) {
      this._initScreenModels();
    }

    return this._screenModels;
  }
}

export default ScreenModelsFactory;
