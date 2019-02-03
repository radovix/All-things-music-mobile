import { action, observable } from 'mobx';

/**
 * Class represents the artists list screen model.
 * Screen model keeps all the data related to the
 * ArtistsListScreen. 
 *
 * @class ArtistsListScreenModel
 */
class ArtistsListScreenModel {
  /**
   * Artists repository.
   */
  artistsRepository;

  /**
   * Is loading data flag.
   */
  @observable isLoading = false;

  /**
   * Artists list.
   */
  @observable artistsList = [];

  /**
   * Creates an instance of ArtistsListScreenModel.
   *
   * @param {ArtistsRepository} artistsRepository Artists repository instance
   * @memberof ArtistsListScreenModel
   */
  constructor(artistsRepository) {
    this.artistsRepository = artistsRepository;
  }

  /**
   * Loads the artist list data.
   *
   * @memberof ArtistsListScreenModel
   */
  async loadArtistsList() {
    this.isLoading = true;

    try {
      const fetchedArtistsList = await this.artistsRepository.getArtistsList();
            
      this.artistsList.clear();
      this.artistsList.push(...fetchedArtistsList);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}

export default ArtistsListScreenModel;