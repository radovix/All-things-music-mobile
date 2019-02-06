import ApiService from '../../services/Api/ApiService';

import SongsMapper from '../../mappers/Songs/SongsMapper';

/**
 * Class represents the songs repository. It is used
 * for fetching the songs related data from the server.
 *
 * @class SongsRepository
 */
class SongsRepository {
  /**
   * Gets the songs list from server.
   *
   * @param {object} payload Payload data
   * @returns songs list
   * @memberof SongsRepository
   */
  async getSongsList(payload) {
    const response = await ApiService.get('songs', payload);

    console.log(payload);
    return SongsMapper.mapDtosToSongs(response.data);
  }
}

export default SongsRepository;