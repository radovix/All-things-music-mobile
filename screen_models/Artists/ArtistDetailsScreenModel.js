import { observable } from 'mobx';

import ArtistModel from '../../models/Artists/ArtistModel';

/**
 * Class represents the artist details screen model.
 * Screen model keeps all the data related to the
 * ArtistDetailsScreen. 
 *
 * @class ArtistDetailsScreenModel
 */
class ArtistDetailsScreenModel {
  /**
   * Artists repository.
   */
  artistsRepository;

  /**
   * Is loading data flag.
   */
  @observable isLoading = false;

  /**
   * Artist details (default object at the beggining).
   */
  @observable artistDetails = new ArtistModel(0);

  /**
   * Creates an instance of ArtistDetailsScreenModel.
   *
   * @param {ArtistsRepository} artistsRepository Artists repository instance
   * @memberof ArtistDetailsScreenModel
   */
  constructor(artistsRepository) {
    this.artistsRepository = artistsRepository;
  }

  /**
   * Loads the artist details data.
   *
   * @param {number} id Artist's ID
   * @memberof ArtistDetailsScreenModel
   */
  async loadArtistDetails(id) {
    this.isLoading = true;

    try {
      const payload = {
        id
      };

      this.artistDetails = await this.artistsRepository.getArtistDetails(payload);
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}

export default ArtistDetailsScreenModel;