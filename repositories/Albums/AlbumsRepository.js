import ApiService from '../../services/Api/ApiService';

import AlbumsMapper from '../../mappers/Albums/AlbumsMapper';

/**
 * Class represents the albums repository. It is used 
 * for fetching the albums related data from server.
 *
 * @class AlbumsRepository
 */
class AlbumsRepository {
  /**
   * Gets the albums list from server.
   *
   * @param {object} payload Payload data
   * @returns albums list
   * @memberof AlbumsRepository
   */
  async getAlbumsList(payload) {
    const response = await ApiService.get('albums', payload);

    return AlbumsMapper.mapDtosToAlbums(response.data);
  }

  /**
   * Gets the album's details from server.
   *
   * @param {object} payload Payload data
   * @returns album's details
   * @memberof AlbumsRepository
   */
  async getAlbumDetails(payload) {
    const response = await ApiService.get(`albums/${payload.id}`);

    return AlbumsMapper.mapDtoToAlbum(response.data);
  }
}

export default AlbumsRepository;