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
   * Artists name keyword from filter.
   */
  @observable filterArtistName = '';

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
  @action.bound
  async loadArtistsList() {
    this.isLoading = true;

    try {
      const payload = {
        keyword: this.filterArtistName || null
      };

      const fetchedArtistsList = await this.artistsRepository.getArtistsList(payload);

      this.artistsList.clear();
      this.artistsList.push(...fetchedArtistsList);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Handles the changes of text inputs in filter. 
   *
   * @param {string} name Field's name
   * @param {string} value Field's value
   * @memberof ArtistsListScreenModel
   */
  @action.bound
  onFilterTextInputChange(name, value) {
    this[name] = value;
  }
}

export default ArtistsListScreenModel;