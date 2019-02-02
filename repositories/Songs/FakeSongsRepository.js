import SongsListMockData from '../../mocks/Songs/SongsListMockData';

/**
 * Class represents the fake songs repository. It is used
 * for mocking the songs repository and returns the mock data.
 *
 * @class FakeSongsRepository
 */
class FakeSongsRepository {
  /**
   * Gets the songs list from server.
   *
   * @param {Object} payload Payload data
   * @returns songs list
   * @memberof FakeSongsRepository
   */
  getSongsList(payload) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(SongsListMockData), 3500);
    });
  }
}

export default FakeSongsRepository;