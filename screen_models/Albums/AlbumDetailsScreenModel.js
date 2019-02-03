import { observable } from 'mobx';

import AlbumModel from '../../models/Albums/AlbumModel';

/**
 * Class represents the album details screen model.
 * Screen model keeps all the data related to the
 * AlbumDetailsScreen. 
 *
 * @class ArtistDetailsScreenModel
 */
class AlbumDetailsScreenModel {
  /**
   * Albums repository.
   */
  albumsRepository;

  /**
   * Is loading data flag.
   *
   * @memberof AlbumDetailsScreenModel
   */
  @observable isLoading = false;

  /**
   * Album details (default object at the beginning)
   *
   * @memberof AlbumDetailsScreenModel
   */
  @observable albumDetails = new AlbumModel(0, 0);

  /**
   * Creates an instance of AlbumDetailsScreenModel.
   *
   * @param {AlbumsRepository} albumsRepository Albums repository instance
   * @memberof AlbumDetailsScreenModel
   */
  constructor(albumsRepository) {
    this.albumsRepository = albumsRepository;
  }

  /**
   * Loads the album details data.
   *
   * @param {number} id Album's ID
   * @memberof AlbumDetailsScreenModel
   */
  async loadAlbumDetails(id) {
    this.isLoading = true;

    try {
      const payload = {
        id
      };

      this.albumDetails = await this.albumsRepository.getAlbumDetails(payload);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}

export default AlbumDetailsScreenModel;