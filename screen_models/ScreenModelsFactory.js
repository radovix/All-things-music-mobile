import ArtistsListScreenModel from './Artists/ArtistsListScreenModel';
import ArtistDetailsScreenModel from './Artists/ArtistDetailsScreenModel';
import AlbumsListScreenModel from './Albums/AlbumsListScreenModel';
import AlbumDetailsScreenModel from './Albums/AlbumDetailsScreenModel';
import SongsListScreenModel from './Songs/SongsListScreenModel';

// import ArtistsRepository from '../repositories/Artists/ArtistsRepository';
// import AlbumsRepository from '../repositories/Albums/AlbumsRepository;
// import SongsRepository from '../repositories/Songs/SongsRepository;
import FakeArtistsRepository from '../repositories/Artists/FakeArtistsRepository';
import FakeAlbumsRepository from '../repositories/Albums/FakeAlbumsRepository';
import FakeSongsRepository from '../repositories/Songs/FakeSongsRepository';

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
    const artistsRepository = new FakeArtistsRepository();
    const albumsRepository = new FakeAlbumsRepository();
    const songsRepository = new FakeSongsRepository();

    this._screenModels = {
      artistsListScreenModel: new ArtistsListScreenModel(artistsRepository),
      artistDetailsScreenModel: new ArtistDetailsScreenModel(artistsRepository),
      albumsListScreenModel: new AlbumsListScreenModel(albumsRepository),
      albumDetailsScreenModel: new AlbumDetailsScreenModel(albumsRepository),
      songsListScreenModel: new SongsListScreenModel(songsRepository)
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
