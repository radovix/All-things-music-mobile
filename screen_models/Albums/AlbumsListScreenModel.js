import { observable } from 'mobx';

/**
 * Class represents the albums list screen model.
 * Screen model keeps all the data related to the
 * AlbumsListScreen. 
 *
 * @class AlbumsListScreenModel
 */
class AlbumsListScreenModel {
  /**
   * Albums repository.
   */
  albumsRepository;

  /**
   * is loading data flag.
   */
  @observable isLoading = false;

  /**
   * Albums list.
   */
  @observable albumsList = [];

  /**
   * Creates an instance of AlbumsListScreenModel.
   *
   * @param {AlbumsRepository} albumsRepository Albums repository instance 
   * @memberof AlbumsListScreenModel
   */
  constructor(albumsRepository) {
    this.albumsRepository = albumsRepository;
  }

  /**
   * Loads the albums list data.
   *
   * @memberof AlbumsListScreenModel
   */
  async loadAlbumsList() {
    this.isLoading = true;

    try {
      const fetchedAlbumsList = await this.albumsRepository.getAlbumsList();

      this.albumsList.clear();
      this.albumsList.push(...fetchedAlbumsList);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}

export default AlbumsListScreenModel;