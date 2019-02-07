import ApiService from '../../services/Api/ApiService';

import ArtistsMapper from '../../mappers/Artists/ArtistsMapper';

/**
 * Class represents the artists repository. It is used 
 * for fetching the artists related data from server. 
 *
 * @class ArtistsRepository
 */
class ArtistsRepository {
  /**
   * Gets the artists list from server.
   *
   * @param {object} payload Payload data
   * @returns artists list
   * @memberof ArtistsRepository
   */
  async getArtistsList(payload) {
    const response = await ApiService.get('artists', payload);

    return ArtistsMapper.mapDtosToArtists(response.data);
  }

  /**
   * Gets the artist's details from server.
   *
   * @param {object} payload Payload data
   * @returns artist's details
   * @memberof ArtistsRepository
   */
  async getArtistDetails(payload) {
    const response = await ApiService.get(`artists/${payload.id}`);

    return ArtistsMapper.mapDtoToArtist(response.data);
  }
}

export default ArtistsRepository;
