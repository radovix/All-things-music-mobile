import ApiService from '../../services/Api/ApiService';

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
    try {
      const response = await ApiService.get('songs');

      console.log(response);

      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default SongsRepository;